import React from 'react'
import works from "./json/work.json"
import Element from './Element'
import { nanoid } from 'nanoid'
function Work() {

// console.log(works[1].title)
const w = works
// console.log(w[1].title)

  return (
<div className="center">
    <div className='worksContainer'>
        {
            Object.keys(w).map((element,key)=> {
                console.log(w[`${element}`].image)
                return(
                    <Element key={key} title={w[`${element}`].title} demo = {w[`${element}`].demo} github={w[`${element}`].github} descriere={w[`${element}`].content} image={w[`${element}`].image} alt={ w[`${element}`].imageAlt} />
                )
            })
        }
    </div>
  
    </div>
    )
}

export default Work