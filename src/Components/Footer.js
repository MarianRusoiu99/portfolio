import React from 'react'
import { motion, AnimatePresence, useInView, stagger } from 'framer-motion'
import { animations } from "./json/animations.js"
import { useStore } from './store.js'
import Carousell from './Carousell.js'
import { nanoid } from 'nanoid'


function Footer() {


  const [menuState, setMenuState] = useStore((store)=>[store.menuState, store.setMenuState])

  console.log(menuState)
  const container = React.useRef(null)
  const isInView = useInView(container, { once: false })


  const [project , setProject] = React.useState()
  const [about , setAbout] = React.useState()
  const [home , setHome] = React.useState()

  
  React.useEffect(()=>{
    setProject( document.querySelector('.worksContainer') )
    setAbout( document.querySelector('.aboutContainer') )
    setHome( document.querySelector('.headerContainer') )
    console.log(project);

    
  },[])
  // console.log(project);
  const projectClickHandler= () => {
    if(menuState){
      setMenuState(menuState)
    }
    project.scrollIntoView()
   }

   const aboutClickHandler= () => {
    if(menuState){
      setMenuState(menuState)
    }
    about.scrollIntoView()
   }

   const homeClickHandler= () => {
    if(menuState){
      setMenuState(menuState)
    }
    home.scrollIntoView()
   }



  return (

    <motion.div  variants={animations.footerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} exit="exit" ref={container}
      className='footerContainer'>
        <motion.div variants={animations.footerChildrenContainer} className='footerNav'>
          <div className='cursorAction' onClick={homeClickHandler}>Home</div>
          <div  className='cursorAction' onClick={projectClickHandler}>Projects</div>
          <div className='cursorAction' onClick={aboutClickHandler}>About</div>

        </motion.div>
      <motion.div  variants={animations.footerChildrenContainer}
        className='footerContacts'>
        <h2><a href="mailto:valentin.rusoiu@gmail.com" >valentin.rusoiu@gmail.com</a></h2>
        <h2><a href="tel:+40773356485" >+40 773356485</a></h2>
      </motion.div>
      <motion.div variants={animations.footerChildrenContainer}
        className='footerCreator'>
        <p>@ValentinRusoiu2023</p>
        {/* <a href="https://bepuro.com/"> inspiration for this website</a> */}
      </motion.div>
    
      <motion.div   variants={animations.footerChildrenContainer}
        className='footerLinkContainer'>
        <a href='https://github.com/MarianRusoiu99' target="_blank" rel="noreferrer"><h2 className='linkItem'>GitHub</h2></a>
        <a href='https://www.linkedin.com/in/valentin-rusoiu-153920197/' target="_blank" rel="noreferrer"><h2 className='linkItem'>Linkedin</h2></a>
        <a href="https://www.instagram.com/valentinrusoiu/" target="_blank" rel="noreferrer"> <h2 className='linkItem'>Instagram</h2></a>
      </motion.div>
      <motion.div variants={animations.footerChildrenContainer} className='footerCarousell'>
      <Carousell key={nanoid()} args={['React','Three.js' ,'react-three-fiber', "Worddpress", "Webflow","Photoshop","Performance Optimisation" ]}/>
      </motion.div>
      <motion.div className='footerLetsTalk' variants={animations.footerChildrenContainer}

      >
      <a  href="mailto:valentin.rusoiu@gmail.com">LET'S TALK</a>
      </motion.div>
    </motion.div>

  )
}

export default Footer