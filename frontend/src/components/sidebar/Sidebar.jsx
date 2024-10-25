import SearchBar from "./SearchBar"
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className='border-r border-rose-400 p-4 flex flex-col'>
        <SearchBar/>
        <div className="divider mt-2 mb-0"></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  );
};

export default Sidebar;