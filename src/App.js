// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component

import Footer from './components/Footer';
import Home from './pages/Home'; // Import pages for different routes
import About from './pages/About';
import Schools from './pages/Schools';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Kigali from './pages/kigali'
function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      {/* Add the Header component */}
       {/* Add the Footer component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Schools" element={<Schools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/kigali" element={<Kigali />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
