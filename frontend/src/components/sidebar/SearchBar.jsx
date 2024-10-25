import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search here ..."
        className="input input-bordered input-primary w-full max-w-xs placeholder:text-violet-300 text-violet-400" />
      <button type="submit" className="btn btn-circle bg-white hover:bg-rose-400 hover:text-white bg-opacity-85 text-rose-400">
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