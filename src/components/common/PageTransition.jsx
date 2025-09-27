import { motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.95, 
        filter: 'blur(10px)',
        y: 30
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)',
        y: 0
      }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: 'blur(5px)',
        y: -30
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
        filter: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition