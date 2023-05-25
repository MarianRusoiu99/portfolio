import React from 'react'
import "../CSS/Carousell.css"
function Carousell(props) {
//   console.log(props.args)
    return (
    <div className="carousellContainer">
        <div className='slide'>
            {
                props.args.map(element => {
                    
                    return(<p className='slideElement'> {element}</p>)
                })
            }
            {
               props.args.map(element => {      
                   return(<p className='slideElement'> {element}</p>)
               })
           }
            {
               props.args.map(element => {      
                   return(<p className='slideElement'> {element}</p>)
               })
           }
        </div>
    </div>
  )
}

export default Carousell