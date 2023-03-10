import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/aboutUs';
import Contact from './pages/contactUs';
import Login from './components/forms/login';
import Signup from './components/forms/signup';
import Home from './pages/homePage';
import Service from './pages/service';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>}  />
      </Routes>
    </>
  );
};

export default App;
