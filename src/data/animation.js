
// mount animation 
export const mountAnimation = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  
    exit: {
      y: -200,
      opacity: 0,
    },
  };
  
  // reverse fade  animation
  export const reverseFade = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "Inertia",
        stiffness: 100,
      },
    },
  };

  // rotate