import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be longer than 3 characters');
    }

    const conversation = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      return toast.error("No such user found");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="h-8 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search here ..."
        className="input input-bordered text-rose-400 bg-white border-rose-400 input-primary w-full max-w-xs 
        placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Searchbar for dark mode */}
      {/* <input
        type="text"
        placeholder="Search here ..."
        className="input input-bordered text-rose-400 border-rose-400 input-primary w-full max-w-xs 
        placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
      /> */}
      <button type="submit" className="btn btn-circle border-rose-400 bg-white hover:bg-rose-400 hover:border-rose-400 hover:text-white bg-opacity-85 text-rose-400">
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
      {/* Button for dark mode */}
      {/* <button type="submit" className="btn btn-circle bg-black bg-opacity-85 text-rose-400">
        <IoSearch className="w-6 h-6 outline-none" />
      </button> */}
    </form>
  )
}

export default SearchBar;