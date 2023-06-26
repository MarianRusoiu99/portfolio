import React from 'react'
import "../CSS/Carousell.css"
import { motion } from 'framer-motion'
import { animations } from './json/animations'

function Carousell(props) {
//   console.log(props.args)
    return (
    <motion.div 
    variants={animations.carouselName}
    initial="hidden"
    animate="visible"
    
    className="carousellContainer">
        <div className='slide'>
            {
                props.args.map((element,key) => {
                    
                    return(<p className='slideElement' key={key}> {element}</p>)
                })
            }
            {
               props.args.map((element,key)=> {      
                   return(<p className='slideElement'key={key}> {element}</p>)
               })
           }
            {
               props.args.map((element,key)=> {      
                   return(<p className='slideElement'key={key}> {element}</p>)
               })
           }
        </div>
    </motion.div>
  )
}

export default Carousell