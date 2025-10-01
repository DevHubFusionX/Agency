import { motion } from 'framer-motion'

const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.95, 
    y: 30
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0
  },
  exit: { 
    opacity: 0, 
    scale: 1.05, 
    y: -30
  }
}

const pageTransition = {
  duration: 0.5, 
  ease: [0.25, 0.46, 0.45, 0.94],
  opacity: { duration: 0.3 },
  scale: { duration: 0.4 }
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition