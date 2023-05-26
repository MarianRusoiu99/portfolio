import React from 'react'
import Background from './Background'
import About from './About'
import Hero from './Hero'
import Carousell from './Carousell'
import Work from './Work'
import { nanoid } from 'nanoid'

function Main() {
  return (
    <div>
    
    <Hero/>
    <Carousell key={nanoid()} args={['React','Three.js' ,'react-three-fiber','drei', 'react-router' , "Worddpress", "Webflow","Photoshop","" ]}/>
    <About/>
    <Work/>

    {/* <Background/> */}
   
    </div>
  )
}

export default Main