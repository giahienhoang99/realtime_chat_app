import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/Signup';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;