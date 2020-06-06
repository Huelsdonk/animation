import React from 'react'
import { motion } from 'framer-motion'

export default function firstone() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    
    return (
        <div>
            <motion.h1 
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                       whileHover={{ scale: 2 }}
                       drag="x"
                       dragConstraints={{ left: -100, right: 100 }}
            >boogers</motion.h1>
            <motion.h1 
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                       whileHover={{ scale: 2 }}
                       drag="x"
                       dragConstraints={{ left: -100, right: 100 }}
            >Move Me</motion.h1>
        </div>
    )
}
