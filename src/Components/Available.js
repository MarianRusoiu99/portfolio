import React, {useEffect,useRef} from 'react'
import { motion } from 'framer-motion';
function Available() {

const text = useRef()

useEffect(()=>{
    console.log(text);
    text.current.innerHTML = text.current.innerHTML.split("").map((char,i)=>
        `<span style="transform:rotate(${i * 0.4}deg)">${char}</span>`
        ).join('')
},[])

  return (
    <div 
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{
        duration: 1,
        delay:1,
        type:"spring"
    }}
     className='circle'>
      
        <motion.div
      
        animate={{opacity:[0,1,0]}}
        transition={{
            duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          
        }}
        className='greenDot'></motion.div>	
        <p ref={text} className='textC'> AVAILABLE-FOR-WORK- </p>
      
    </div>
  )
}

export default Available