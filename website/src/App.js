import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Gallery from './pages/Gallery/Gallery.js';
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/gallery" element={<Gallery />}/>
        </Routes>
      </div>
    </>
  )
  }
 
export default App;
