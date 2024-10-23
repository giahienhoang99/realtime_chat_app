import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LogIn from './pages/login/Login';

function App() {

  return <div className='p-4 h-screen flex items-center justify-center'>
    <LogIn/>
  </div>
}

export default App