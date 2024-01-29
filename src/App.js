// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import All from './components/All';
import Statistique from './components/Statistique';
import LoginPage from './components/LoginPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<HeaderAndContent />} />
      </Routes>
    
  );
}

function HeaderAndContent() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <LoginPage />;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/statistique" element={<Statistique />} />
        <Route path="/all" element={<All />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default HeaderAndContent;
