import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Blog from './Blog';
import Home from './Home';
import Login from './login';
// Import your components

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;