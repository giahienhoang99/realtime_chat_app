import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search here ..."
        className="input input-bordered text-rose-400 bg-white border-rose-400 input-primary w-full max-w-xs placeholder:text-rose-400 text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-300"
      />
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