import React from 'react'
import "../CSS/Carousell.css"
function Carousell(props) {
//   console.log(props.args)
    return (
    <div className="carousellContainer">
        <div className='slide'>
            {
                props.args.map((element,key) => {
                    
                    return(<p className='slideElement' key={key}> {element}</p>)
                })
            }
            {
               props.args.map((element,key)=> {      
                   return(<p className='slideElement'key={key}> {element}</p>)
               })
           }
            {
               props.args.map((element,key)=> {      
                   return(<p className='slideElement'key={key}> {element}</p>)
               })
           }
        </div>
    </div>
  )
}

export default Carousell