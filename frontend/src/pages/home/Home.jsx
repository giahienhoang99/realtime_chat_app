import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-0'>
      <Sidebar />
    </div>
  );
};

export default Home;
