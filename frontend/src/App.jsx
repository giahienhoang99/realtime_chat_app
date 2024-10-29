import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/Signup';
import Home from './pages/home/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;