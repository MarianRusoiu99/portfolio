import React, {useEffect, useState} from 'react'
import Footer from './Footer';
import {motion , useAnimation} from 'framer-motion'
import {animations} from "./json/animations.js"

function Menu() {
    console.log(animations)
    const [menuState,setMenuState] = useState(false) 

    const path01Controls = useAnimation();
const path02Controls = useAnimation();

const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21', stroke:'#1a1a1a'  },
    closed: { d: 'M0 9.5L24 9.5' , stroke:'#e6e6e6'  },
   }

   const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064',stroke:'#1a1a1a'  },
    moving: { d: 'M0 14.5L24 14.5',stroke:'#1a1a1a'  },
    closed: { d: 'M0 16.5L15 16.5', stroke:'#e6e6e6'},
   }

const onClick = async () => {
    // change the internal state
    setMenuState(!menuState);
  
    // start animation
    if (!menuState) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };


    // const menuClickHandler = function(){
    //     menuState ? setMenuState(false) : setMenuState(true)
    // }
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // console.log(menuState)    
    
    // },[menuState]);
  return (
    <div>
       <div className='menuHamburger' onClick={onClick}> 
      
       <svg width='94' height='94' viewBox='0 0 94 94'>
    <motion.path 
      {...path01Variants.closed}
      animate={path01Controls}
      transition={{ duration: 0.2 }}
      stroke='#e6e6e6'
  
      id="scale"
    />
    <motion.path
      {...path02Variants.closed}
      animate={path02Controls}
      transition={{ duration: 0.2 }}
      stroke='#e6e6e6'

      id="scale"
    />
  </svg>
        
         </div>
        {
            menuState && 
            <motion.div 
            variants={animations.containerVariants}
            initial="hidden"
            animate="visible"
            className='menuOverlay'>
                <Footer/>
            </motion.div>
            
            
        }
        </div>
  )
}

export default Menu