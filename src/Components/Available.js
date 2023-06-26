import React, {useEffect,useRef} from 'react'

function Available() {

const text = useRef()

useEffect(()=>{
    console.log(text);
    text.current.innerHTML = text.current.innerHTML.split("").map((char,i)=>
        `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
        ).join('')
},[])

  return (
    <div className='circle'>
        <div className='greenDot'></div>	
        <div className='textC'>
            <p ref={text}> AVAILABLE FOR WORK- AVAILABLE FOR WORK- </p>
        </div>
    </div>
  )
}

export default Available