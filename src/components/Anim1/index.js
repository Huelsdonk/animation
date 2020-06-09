import React from 'react'
import { motion, useViewportScroll } from 'framer-motion'

export default function Anim1() {
    // const { scrollYProgress } = useViewportScroll();

    const variants = {
        hidden: {
            opacity: 0,
            backgroundColor: "cadetblue"
        },
        visible: {
            opacity: 1,
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.6)",
            backgroundColor: "cornflowerblue",
            transition: {
                when: "afterChildren",
                duration: 4
            }
        },
    }

    return (
        <motion.div
            
        >
            <motion.div className="jumbotron"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 2 }}
                whileHover={{ scale: 2 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            ><h1 className="display-4">Welcome</h1>
            </motion.div>
            <div className="container mt-4">
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                whileHover={{ scale: 2 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            >Move Me</motion.h1>
            {/* <motion.path style={{ pathLength: scrollYProgress }} /> */}
            <motion.button
                className="btn btn-primary"
                drag="y"
                dragConstraints={{top: 0, bottom: 200}}
                initial={{x: "100vw"}}
                animate={{x: 0}}
            >
                Click to see what's next!!
            </motion.button>
            
            </div>
        </motion.div>
    )
}
