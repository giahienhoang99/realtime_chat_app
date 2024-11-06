import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

// if only use (message) => error since message is the key in the mapping in Messages.jsx
// therefore, use {message} to destructure the message key and directly access the message data mapped to the key
const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = (message.senderId === authUser._id);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-rose-400' : 'bg-black bg-opacity-60';
    const formattedTime = extractTime(message.createdAt)


    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
            </div>
        </div>
    );
};

export default Message;


// starter code
// const Message = () => {
//     return (
//         <div>
//             <div className="chat chat-end">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img
//                             alt="Tailwind CSS chat bubble component"
//                             src="https://avatar.iran.liara.run/public/49" />
//                     </div>
//                 </div>
//                 <div className="chat-bubble text-white bg-rose-400">sup dawg</div>
//                 <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//             </div>
//         </div>
//     );
// };

// export default Message;