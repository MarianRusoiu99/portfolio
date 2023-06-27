export const animations = {

  containerVariants: {
    hidden: {
      y: "-100%",
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.3,
        type: 'tween',
        ease: 'easeInOut',
        stiffness: 200,
        staggerChildren: 0.5

      }
    },
    exit: {
      y: "-100%",
      opacity: 0,

      transition: {
        ease: 'easeInOut',
        stiffness: 100,
      }
    }
  },
  buttonVariants: {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(225,225,225)",
      boxShadow: "0px 0px 8px rgb(225,225,225)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  },
  svgVariants: {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1
      }
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
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.1,
        duration: 0.4,
        opacity: {
          delay: 0.2 // custom duration for opacity property only
        }

      }
    },
    exit: {
      opacity: 0,
      height: 0,
      delay: 0.1,
      duration: 0.4,
      transition: {
        ease: 'easeInOut',
        height: {
          delay: 0.2 // custom duration for opacity property only
        }
      }
    }
  },
  footerContainer: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
        staggerChildren: 0.3,
        staggerDirection: -1

      }
    },
    exit: {
      opacity: 0,
      duration: 0.1,

    }
  },
  footerChildrenContainer: {
    hidden: {
      opacity: 0,
      y: 100,

    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
      }

    },

  },


  headerName: {
    hidden: {
      opacity: 0,
      y: -100,


    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
      }

    },

  },
  carouselName: {
    hidden: {
      opacity: 0,
      y: 100,


    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 1.0,
        duration: 1.5,
      }

    },
  },
  projectsContainer: {
    hidden: {
      opacity: 0,
      
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        staggerChildren: 0.1,
        staggerDirection: -1
      },

    },
  },
  projectChildrenContainer: {
    hidden: {
      opacity: 0,
      y: -10,

    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.2,
      }

    },

  },
  aboutChildrenContainer: {
    hidden: {
      y:10,
      // fontSize: "12px",
      color:"rgb(230, 230, 230)",
      // textDecoration:"none",

    },
    visible: {
      y:0,
      // fontSize: "25px",
      // textDecoration:"underline",
      color: "rgb(248, 46, 46)",
      transition: {
        type: 'spring',
        duration: 1.0,
      }

    },

  },
  aboutContainer: {
    hidden: {
      opacity: 0,
      

      
    },
    visible: {
      
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },

    },
  },


}