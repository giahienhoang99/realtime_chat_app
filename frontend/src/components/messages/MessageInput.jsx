import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-2 mt-3">
      <div className="w-full relative">
        <input type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-rose-400 placeholder:text-white text-white"
          placeholder="Send a message"
        />
        <button type="submit" className="text-white absolute inset-y-0 end-0 flex items-center pe-3">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



// starter code
// import { IoSend } from "react-icons/io5";

// const MessageInput = () => {
//   return (
//     <form className="px-2 mt-3">
//       <div className="w-full relative">
//         <input type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-rose-400 placeholder:text-white text-white"
//           placeholder="Send a message"
//         />
//         <button type="submit" className="text-white absolute inset-y-0 end-0 flex items-center pe-3">
//           <IoSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;