import NavbarComponent from './pages/Navbar'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  

  return (
      
    <BrowserRouter>
        <NavbarComponent/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
    

      
      
      
   
    
  )
}

export default App
