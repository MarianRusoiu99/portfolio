export const animations = {

 containerVariants: {
    hidden:{
      y:"-100%",
      opacity:0,
      
    },
    visible:{
      y:0,
      opacity:1,
      
      transition:{
        duration:0.3,
        type: 'tween',
        ease: 'easeInOut',
        stiffness: 200,
        staggerChildren: 0.5
        
      }
    },
    exit:{
      y:"-100%",
      opacity:0,
      
      transition:{
        ease: 'easeInOut',
        stiffness: 100,
      }
    }
  },
  buttonVariants: {
    hover:{scale: 1.1, 
      textShadow: "0px 0px 8px rgb(225,225,225)" ,
      boxShadow: "0px 0px 8px rgb(225,225,225)",
      transition:{
        duration: 0.3,
        yoyo:Infinity
      }
    }},
    svgVariants : {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration : 0.1 }
        },
      },
      pathVariants: {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: { 
            duration: 1,
            ease: "easeInOut",
          }
        }
      },
      
 elementVariants: {
    hidden:{
      opacity:0,
      height:0
    },
    visible:{
      height:"auto",
      opacity:1,
      transition:{
        type: 'spring',
        delay:0.1,
        duration: 0.4,
        opacity: {
          delay: 0.2 // custom duration for opacity property only
        }
      
      }
    },
    exit:{
      opacity:0,
      height:0,
      delay:0.1,
      duration: 0.4,
      transition:{
        ease: 'easeInOut',
        height: {
          delay: 0.2 // custom duration for opacity property only
        }
      }
    }
  },
  footerContainer: {
    hidden:{
      opacity:0,
     
    },
    visible:{

      opacity:1,
      transition:{
        type: 'tween',
        duration: 0.9,
        staggerChildren:1.0,
        delayChildren: 1.0,
      
      }
    },
    exit:{
      opacity:0,
      delay:0.1,
      duration: 0.9,
      transition:{
        ease: 'easeInOut',
      }
    }
  },
  footerChildrenContainer: {
    hidden:{
      opacity:0,
     
    },
    visible:{

      opacity:1,
      transition:{
        type: 'tween',
      
      }
    },
    exit:{
      opacity:0,
      delay:0.1,
      duration: 0.9,
    }
  },



}