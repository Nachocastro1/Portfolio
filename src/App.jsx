import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import NavbarComponent from './pages/Navbar';


function App() {


  return (

    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>







  )
}

export default App
