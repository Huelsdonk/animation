import React from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import './style.css'

export default function Scroll() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="wrapper">
            <motion.div
                className="container"
                style={{
                    scale
                }}
            >
                <motion.div
                    className="item"
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
            </motion.div>
        </div>
    )


}
