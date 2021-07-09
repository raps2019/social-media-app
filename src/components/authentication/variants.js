export const formContainerVariants = {
  hidden: {
    // scale: 0,
    x:'-100vw'
  },
  visible: {
    // scale: 1,
    x:0,
    transition: {
      type: 'spring',
      stiffness: 200,
      mass:1,
      damping: 16,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const formChildVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
    },
  },
  hover: {
    scale:1.1,
    transition: {
      // duration: 0.3,
      yoyo: Infinity,
    }
  }
};

export const pageContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeInOut', duration:0.25 },
    opacity: 0,
  },
};
