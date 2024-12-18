import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-rose-400 hover:text-white text-black text-opacity-100 rounded p-2 py-2 cursor-pointer
                    ${isSelected ? "bg-rose-400 text-white" : ""}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 bg-rose-300 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold">{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {lastIdx ? null : <div className="divider my-0 py-0 h-1"></div>}
        </>
    );
};

export default Conversation;