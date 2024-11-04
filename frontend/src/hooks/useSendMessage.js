import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({message})
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            //[...messages, data] uses the spread operator (...), which takes all existing items in messages 
            //(an array of chat messages) and includes them in a new array. Then, it appends data (the new 
            //message data received from the server)
            setMessages([...messages, data]);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {sendMessage, loading};
};

export default useSendMessage;