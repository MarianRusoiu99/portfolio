import React from 'react'
import Background from './Background'
import About from './About'
import Hero from './Hero'
import Carousell from './Carousell'
import Work from './Work'


function Main() {
  return (
    <div>Main
    
    <Hero/>
    <Carousell args={['React','three.js' ,'reactthreefiber','drei', 'asdfsadf' , "sadfsdf", "asdfsadf" ]}/>
    <About/>
    <Work/>

    {/* <Background/> */}
   
    </div>
  )
}

export default Main