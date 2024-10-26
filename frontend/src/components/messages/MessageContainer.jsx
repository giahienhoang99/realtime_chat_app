import Messages from './Messages';
import MessageInput from './MessageInput';

// message container aka chatbox
const MessageContainer = () => {
    return (
        <div className="bg-white w-[1000px] px-2 py-2 mb-2 flex flex-col">
            {/* Header */}
            <div className="flex gap-2 items-center px-2">
                <div className="avatar online">
                    <div className="w-12 bg-rose-300 rounded-full">
                        <img src="https://avatar.iran.liara.run/public/49" alt="user avatar" />
                    </div>
                </div>
                <span className="text-black font-bold text-opacity-70">Hien Beo</span>
            </div>
            <div className="divider my-0 mx-1.5"/>
            <Messages/>
            <MessageInput/>
        </div>
    );
};

export default MessageContainer;



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