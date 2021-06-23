export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        },
    },
};

export const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  export const containerAnim ={
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1 }  },
  };