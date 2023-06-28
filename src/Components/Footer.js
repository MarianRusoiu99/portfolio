import React from 'react'
import { motion, AnimatePresence, useInView, stagger } from 'framer-motion'
import { animations } from "./json/animations.js"
import { useStore } from './store.js'


function Footer() {


  const [menuState, setMenuState] = useStore((store)=>[store.menuState, store.setMenuState])

  console.log(menuState)
  const container = React.useRef(null)
  const isInView = useInView(container, { once: false })


  const [project , setProject] = React.useState()
  

  
  React.useEffect(()=>{
    setProject( document.querySelector('.worksContainer') )
    console.log(project);

    
  },[])
  // console.log(project);
  const proj= () => {
    if(menuState){
      setMenuState(menuState)
    }
    project.scrollIntoView()
   }

  return (

    <motion.div  variants={animations.footerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} exit="exit" ref={container}
      className='footerContainer'>
        <motion.div variants={animations.footerChildrenContainer} className='nav'>
          <button onClick={proj}>Projects</button>

        </motion.div>
      <motion.div  variants={animations.footerChildrenContainer}
        className='footerContacts'>
        <h2>valentin.rusoiu@gmail.com</h2>
        <h2>+40 773356485</h2>
      </motion.div>
      <motion.div variants={animations.footerChildrenContainer}
        className='footerCreator'>
        <p>@ValentinRusoiu 2023</p>
        <a href="https://bepuro.com/"> inspiration for this website</a>
      </motion.div>
      <motion.div   variants={animations.footerChildrenContainer}
        className='footerLinkContainer'>
        <a href='https://github.com/MarianRusoiu99' target="_blank" rel="noreferrer"><h2 className='linkItem'>GitHub</h2></a>
        <a href='https://www.linkedin.com/in/valentin-rusoiu-153920197/' target="_blank" rel="noreferrer"><h2 className='linkItem'>Linkedin</h2></a>
        <a href="https://www.instagram.com/valentinrusoiu/" target="_blank" rel="noreferrer"> <h2 className='linkItem'>Instagram</h2></a>
      </motion.div>
      <motion.div className='footerLetsTalk' variants={animations.footerChildrenContainer}

      >
        LET'S TALK
      </motion.div>
    </motion.div>

  )
}

export default Footer