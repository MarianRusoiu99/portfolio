import React, {useEffect,useRef} from 'react'
import { motion } from 'framer-motion';
function Available() {

const text = useRef()

useEffect(()=>{
    console.log(text);
    text.current.innerHTML = text.current.innerHTML.split("").map((char,i)=>
        `<span style="transform:rotate(${i * 19}deg)">${char}</span>`
        ).join('')
},[])

  return (
    <div className='circle'>
        <motion.div
        // initial={{opacity:0}}
        animate={{opacity:[0,1,0]}}
        transition={{
          type:"spring",
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
        className='greenDot'></motion.div>	
        <p ref={text} className='textC'> AVAILABLE-FOR-WORK- </p>
        
    </div>
  )
}

export default Available