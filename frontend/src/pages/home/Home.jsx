import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className='flex h-[90%] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter 
    backdrop-blur-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
