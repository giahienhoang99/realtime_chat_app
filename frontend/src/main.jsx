import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

/*
BrowserRouter from react-router-dom, adding SPA routing capabilities

The app can now use client-side navigation, which improves user experience by avoiding full page reloads 
and allows you to manage different views in your real-time chat app, like logging in, chatting, and 
viewing other users

BrowserRouter uses the HTML5 history API to keep your app’s URL in sync with the content displayed on 
the screen. When users click a link or trigger a navigation action, React Router updates the URL and 
displays the appropriate component without reloading the page
*/