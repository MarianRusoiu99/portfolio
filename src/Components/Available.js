import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
function Available() {

  const text = useRef();


  const content = "AVAILABLE-FOR-WORK-"


  return (
    <motion.a href="mailto:valentin.rusoiu@gmail.com" initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        delay: 1.5,
        type: "spring"
      }}
      className='circle'>
      <motion.div

        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,

        }}
        className='greenDot'></motion.div>
      <p ref={text} className='textC'> {
        content.split("").map((char, i) => {
       
          return (<span style={{ transform: `rotate(${i * 19}deg` }}>
            {char}</span>)

        }
        )

      } </p>


    </motion.a>
  )
}

export default Available