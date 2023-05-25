import React from 'react'

function Element(props) {
    const [isShown, setIsShown] = React.useState(false);
  return (
    <div>
        <div className='worksElement' key={props.key} onMouseEnter={() => setIsShown(true)}  onMouseLeave={() => setIsShown(false)}>
        <div className="row1">
        <h3 className="title">{props.title}</h3>
        <div className='links'> <a href={props.demo}>DEMO</a> <a href={props.github}>GITHUB</a></div>
        </div>
        {isShown && 
        (<div className="row2">
        <div className='descriere'>{props.descriere}</div>
        <img className="image" src={props.image} alt={props.alt}/>
        </div>
        )}
        
                            </div></div>
  )
}

export default Element