import React,{useRef} from 'react'
import works from "./json/work.json"
import Element from './Element'
import { nanoid } from 'nanoid'
import { motion, useInView} from 'framer-motion'
import { animations } from './json/animations'

function Work() {

// console.log(works[1].title)
const w = works
// console.log(w[1].title)
const container = React.useRef(null)
const isInView = useInView(container, { once: false })
  return (<>

    <motion.div 
    ref={container}
    variants={animations.projectsContainer}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    className='worksContainer'>
        <motion.h2 variants={animations.footerChildrenContainer} className='sectionText'>Projects</motion.h2>
        {
            Object.keys(w).map((element,key)=> {
             
                return(
                    <motion.div variants={animations.footerChildrenContainer}> 
                    <Element key={key} title={w[`${element}`].title} demo = {w[`${element}`].demo} github={w[`${element}`].github} descriere={w[`${element}`].content} image={w[`${element}`].image} alt={ w[`${element}`].imageAlt} />
                    </motion.div>
                )
            })
        }
    </motion.div>

</>
    )
}

export default Work