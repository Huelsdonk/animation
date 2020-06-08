import React from 'react'
import { motion, useViewportScroll } from 'framer-motion'

export default function Anim1() {
    // const { scrollYProgress } = useViewportScroll();

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
                        transition={{duration: 2}}
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
            {/* <motion.path style={{ pathLength: scrollYProgress }} /> */}

        </div>
    )
}
