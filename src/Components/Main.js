import React from 'react'
import Background from './Background'
import About from './About'
import Hero from './Hero'
import Carousell from './Carousell'
import Work from './Work'
import { nanoid } from 'nanoid'
import SimplePlane from './SimplePlane'
import image from "./SimplePlane/b.webp"
import { Curtains } from "react-curtains";
import Available from './Available'
import { motion } from 'framer-motion'
import { animations } from './json/animations'

function Main() {
  return (
    <div> 
      <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
    <SimplePlane source={image}/> 
    <Available/>
    <Carousell key={nanoid()} args={['React','Three.js' ,'react-three-fiber','drei', 'react-router' , "Worddpress", "Webflow","Photoshop","" ]}/>
    </Curtains>
   
    {/* <Hero/> */}
    {/* <Carousell key={nanoid()} args={['React','Three.js' ,'react-three-fiber','drei', 'react-router' , "Worddpress", "Webflow","Photoshop","" ]}/> */}
    <Work/>
    <About/>
   
   
   

    {/* <Background/> */}
   
    </div>
  )
}

export default Main