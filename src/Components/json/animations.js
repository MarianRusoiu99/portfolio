export const animations = {

 containerVariants: {
    hidden:{
      opacity:0,
      
    },
    visible:{
      opacity:1,
      
      transition:{
        type: 'spring',
        delay: 0.1
      }
    },
    exit:{
      opacity:0,
      transition:{
        ease: 'easeInOut'
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
      }







}