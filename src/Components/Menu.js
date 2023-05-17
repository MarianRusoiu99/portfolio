import React, {useEffect, useState} from 'react'

function Menu() {

    const [menuState,setMenuState] = useState(false) 
    const menuClickHandler = function(){
        menuState ? setMenuState(false) : setMenuState(true)
    }
    useEffect(() => {
        // Update the document title using the browser API
        console.log(menuState)    
    
    },[menuState]);
  return (
    <div>
       <div onClick={menuClickHandler}> 
        Menu
        </div>
        {
            menuState && 
            <div>
                
            </div>
            
            
        }
        </div>
  )
}

export default Menu