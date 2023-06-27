import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
function Available() {

  const text = useRef();


  const content = "AVAILABLE-FOR-WORK-"

  // useEffect(()=>{
  //     console.log(text);
  //     text.current.innerHTML = text.current.innerHTML.split("").map((char,i)=>
  //         `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
  //         ).join(' ')
  // },[])

  return (
    <div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        delay: 1,
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
          console.log(char);
          return (<span style={{ transform: `rotate(${i * 19}deg` }}>
            {char}</span>)

        }
        )

      } </p>

    </div>
  )
}

export default Available