import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-black text-opacity-75 hover:text-rose-400 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;