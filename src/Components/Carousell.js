import React from 'react'
import "../CSS/Carousell.css"
import { motion } from 'framer-motion'
import { animations } from './json/animations'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
function Carousell(props) {


    const windowSize = React.useRef(window.innerWidth).current
    const [noSlides, setNoSlides] = React.useState(4)

    React.useEffect(() => {
        if (windowSize < 1000) {
            setNoSlides(3)
        }
        if (windowSize < 700) {
            setNoSlides(2)
        }
        if (windowSize < 500) {
            setNoSlides(1)
        }
    }, [])

    //   console.log(props.args)
    return (
        // <motion.div 
        // variants={animations.carouselName}
        // initial="hidden"
        // animate="visible"

        // className="carousellContainer">
        //     <div className='slide'>
        //         {
        //             props.args.map((element,key) => {

        //                 return(<p className='slideElement' key={key}> {element}</p>)
        //             })
        //         }
        //         {
        //            props.args.map((element,key)=> {      
        //                return(<p className='slideElement'key={key}> {element}</p>)
        //            })
        //        }
        //         {
        //            props.args.map((element,key)=> {      
        //                return(<p className='slideElement'key={key}> {element}</p>)
        //            })
        //        }
        //     </div>
        // </motion.div>

        <div>

            <Splide
                options={{
                    type: 'loop',
                    rewind: true,
                    arrows: false,
                    pagination: false,
                    perPage: { noSlides },
                    perMove: 1,
                    drag: "free",
                    snap: true,
                    clones: 7,

                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 1
                    }

                }}
                aria-label="Tehnologies"
                extensions={{ AutoScroll }}
            >
                {
                    props.args.map((element, key) => {

                        return (<SplideSlide><p className='slideElement' key={key}> {element}</p></SplideSlide>)
                    })
                }
            </Splide>
        </div>
    )
}

export default Carousell