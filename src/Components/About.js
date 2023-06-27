import React,{useRef} from 'react'
import { motion, useInView} from 'framer-motion'
import { animations } from './json/animations'

function About() {
  const container = React.useRef(null)
  const isInView = useInView(container, { once: false })

  return (
    <div  className="aboutContainer"  
    >
       <h2 className='sectionText'> About <span className='me'>me</span></h2>
        <motion.p ref={container} className="aboutText" variants={animations.aboutContainer}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    >
        I'm a <motion.span variants={animations.aboutChildrenContainer} className='pas'>passionate</motion.span> web developer specializing in creating <motion.span variants={animations.aboutChildrenContainer} className='pas'>exceptional</motion.span> digital experiences. With knowledge in React, WebGL, and powerful libraries like @react-
        three/fiber and Drei, I have the skills to bring your ideas to life with <motion.span variants={animations.aboutChildrenContainer} className='pas'>stunning visual effects and immersive interactivity</motion.span>.
       </motion.p>  
       {/* <img className='photo' src="./Assets/media/vali.png" alt="Rusoiu Valentin"></img> */}
    </div>
  
  )
}

export default About