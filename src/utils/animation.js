import { delay } from "motion";

export const iconVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const motionVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


export const imgVariants = {
  hidden: { x: 150, opacity: 0 },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};