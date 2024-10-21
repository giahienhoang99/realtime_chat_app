import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id; // accessible with the help of protectRoute in messageRoutes

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // if 2 users have no conversation already => create a new conversation
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //await conversation.save();
        //await newMessage.save();
        // this will save conversations and messages in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage in message controller:", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};