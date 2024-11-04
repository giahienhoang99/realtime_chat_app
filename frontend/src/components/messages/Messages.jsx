import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);

  return (
    <div className="px-2 flex-1 overflow-auto">
      
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