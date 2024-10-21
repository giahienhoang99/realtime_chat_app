import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    // participants = array of User
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ],
}, { timestamps: true });

const Conversation = mongoose.model.apply("Conversation", conversationSchema);

export default Conversation;