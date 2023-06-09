import React from 'react';
import './App.css';
import "./CSS/Header.css"
import "./CSS/Main.css"
import "./CSS/Page.css"
import AnimatedCursor from "react-animated-cursor"

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
       <AnimatedCursor 
      color="230, 230, 230"  
    innerSize={15}
    outerSize={25}
    innerScale={2}
    outerScale={2.0}
    outerAlpha={1}
    innerStyle={
      {
        mixBlendMode: 'difference'
      }
    }
    outerStyle={{
      mixBlendMode: 'difference'
    
    }}
    clickables={[
      'a',
      '.title',
      'svg',
      '.cursorAction',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
       />
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
          
          <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
     
    </BrowserRouter>


    </div>
  );
}

export default App;
