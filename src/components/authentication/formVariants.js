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
};
