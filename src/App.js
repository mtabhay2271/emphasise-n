import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/aboutUs';
import Contact from './pages/contactUs';
import Login from './components/forms/login';
import Signup from './components/forms/signup';
import New from './pages/new';
import Home from './pages/homePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
};

export default App;
