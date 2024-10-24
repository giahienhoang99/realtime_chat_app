const SearchBar = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search here ..." 
      className="input input-bordered input-primary w-full max-w-xs placeholder:text-violet-300 text-violet-400" />
    </form>
  )
}

export default SearchBar;