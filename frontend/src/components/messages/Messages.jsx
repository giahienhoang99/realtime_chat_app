import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  //console.log("messages:", messages);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message whenever messages change
    if (messages.length > 0) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  },[messages]);

  return (
    <div className="px-2 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}

      {/* skeleton when loading message data from db */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* if conversation has no message */}
      {!loading && messages.length === 0 && (
        <p className="text-center text-rose-400">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;


// starter code
// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div className="px-2 flex-1 overflow-auto">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default Messages;