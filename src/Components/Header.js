import React from 'react'
import Menu from './Menu'
import { motion } from 'framer-motion'
import { animations } from './json/animations'
function Header() {
  return (
    <div className="headerContainer">
      <motion.h1 
      variants={animations.headerName}
      initial="hidden"
      animate="visible"
      className='name'> 	&#166; Rusoiu Vanlentin &#166; </motion.h1>
      <Menu/>
    </div>
  )
}

export default Header