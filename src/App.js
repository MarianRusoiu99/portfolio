import React from 'react';
import './App.css';
import "./CSS/Header.css"
import "./CSS/Main.css"
import "./CSS/Page.css"

import {
  BrowserRouter,
  Routes,Route } from "react-router-dom";


import Main from './Components/Main';
import NotFound from './Components/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SimplePlane from './Components/SimplePlane';  

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
          
          <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <SimplePlane />
    </BrowserRouter>


    </div>
  );
}

export default App;
