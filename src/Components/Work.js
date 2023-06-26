import React from 'react'
import works from "./json/work.json"
import Element from './Element'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { animations } from './json/animations'

function Work() {

// console.log(works[1].title)
const w = works
// console.log(w[1].title)

  return (

    <motion.div
    variants={animations.projectsContainer}
    initial="hidden"
    animate="visible"
    className='worksContainer'>
        <h2 className='sectionText'>Projects</h2>
        {
            Object.keys(w).map((element,key)=> {
                console.log(w[`${element}`].image)
                return(
                    <Element key={key} title={w[`${element}`].title} demo = {w[`${element}`].demo} github={w[`${element}`].github} descriere={w[`${element}`].content} image={w[`${element}`].image} alt={ w[`${element}`].imageAlt} />
                )
            })
        }
    </motion.div>
    )
}

export default Work