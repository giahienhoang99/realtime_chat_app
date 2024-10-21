import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req,res) => {
    try {
        // js object destructuring
        const {message} = req.body;
        // object destructuring with renaming
        // extract id from params and rename to receiverId
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

        // SOCKET IO FUNCTIONALITY WILL GO HERE

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

export const getMessages = async (req,res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
        
        // find the conversation between user and their selected user to chat with
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // This call .populate("messages") pulls in the 
                                 // actual message data instead of just their IDs
        // if no conversation return empty array
        if (!conversation) return res.status(200).json([]);
        
        const messages = conversation.messages;
        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessages in message controller:", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};