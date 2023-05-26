import React, {useEffect, useState} from 'react'
import Footer from './Footer';

function Menu() {

    const [menuState,setMenuState] = useState(false) 
    const menuClickHandler = function(){
        menuState ? setMenuState(false) : setMenuState(true)
    }
    useEffect(() => {
        // Update the document title using the browser API
        // console.log(menuState)    
    
    },[menuState]);
  return (
    <div>
       <div className='menuHamburger' onClick={menuClickHandler}> 
      
        
        {!menuState ? <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
       : <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>}
         </div>
        {
            menuState && 
            <div className='menuOverlay'>
                <Footer/>
            </div>
            
            
        }
        </div>
  )
}

export default Menu