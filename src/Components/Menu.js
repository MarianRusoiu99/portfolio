import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { animations } from "./json/animations.js"
import { useStore } from './store.js'
function Menu() {





  // const [menuState, setMenuState] = useState(false)


  const [menuState, setMenuState] = useStore((store)=>[store.menuState, store.setMenuState])
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const path01Variants = {
    open: { d: 'M3.06061 3.99999L44.0606 31', stroke: '#1a1a1a' },
    closed: { d: 'M0 9.5L40 9.5', stroke: '#e6e6e6' },
  }

  const path02Variants = {
    open: { d: 'M3.00006 31.0607L44 3.06064', stroke: '#1a1a1a' },
    moving: { d: 'M0 24.5L24 24.5', stroke: '#1a1a1a' },
    closed: { d: 'M0 25.5L24 25.5', stroke: '#e6e6e6' },
  }

  const onClick = async () => {
    // change the internal state
    setMenuState(menuState);

    // start animation
   
  };

  React.useEffect(()=>{
       // start animation
    if (menuState) {
      path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
       path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  },[menuState])



  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.9,
        type: "spring"
      }} >
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
      <AnimatePresence>
        {
          menuState &&

          <motion.div
            variants={animations.containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='menuOverlay'>
            <Footer />
          </motion.div>


        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Menu