import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

// message container aka chatbox
const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        //cleanup function (unmounts)
        return () => setSelectedConversation(null); // sett selected conv to null on cleanup
    },[setSelectedConversation]);

    return (
        <div className="bg-white w-[1000px] px-2 py-2 mb-2 flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className="flex gap-2 items-center px-2">
                        <div className="avatar online">
                            <div className="w-12 bg-rose-300 rounded-full">
                                <img src={selectedConversation.profilePic} alt="user avatar" />
                            </div>
                        </div>
                        <span className="text-black font-bold text-opacity-70">{selectedConversation.fullName}</span>
                    </div>
                    <div className="divider my-0 mx-1.5" />
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

// no chat selected when first login/refresh page
const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-rose-400 font-semibold flex flex-col
             items-center gap-2'>
                <p>Welcome {authUser.fullName} 😇</p>
                <p>Select a chat to start messaging 🤙🏻</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};



// starter code
// import Messages from './Messages';
// import MessageInput from './MessageInput';

// // message container aka chatbox
// const MessageContainer = () => {
//     return (
//         <div className="bg-white w-[1000px] px-2 py-2 mb-2 flex flex-col">
//             {/* Header */}
//             <div className="flex gap-2 items-center px-2">
//                 <div className="avatar online">
//                     <div className="w-12 bg-rose-300 rounded-full">
//                         <img src="https://avatar.iran.liara.run/public/49" alt="user avatar" />
//                     </div>
//                 </div>
//                 <span className="text-black font-bold text-opacity-70">Hien Beo</span>
//             </div>
//             <div className="divider my-0 mx-1.5"/>
//             <Messages/>
//             <MessageInput/>
//         </div>
//     );
// };

// export default MessageContainer;