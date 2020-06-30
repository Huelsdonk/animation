import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import './style.css'
import Unicorn4 from "./../../assets/unicorn4.png"
import { bunchOfUnicorns } from "./bunchOfUnicorns"
import { bunchMoreUnicorns } from "./bunchMoreUnicorns"
import ImageBucket from "../ImageBucket"

export default function Scroll() {
    // const [elTop, setElTop] = useState(0)
    // const ref = useRef(null)
    const transition = {
        ease: "easeIn"
      }
    
    const { scrollY } = useViewportScroll()
    const { scrollX } = useViewportScroll();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1.1]);

    const y1 = useTransform(scrollYProgress, [0, 1], [Math.floor(Math.random() * (600 - 300) + 300), Math.floor(Math.random() * (1000 - 500) + 500)]);
    const x1 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [200, 900, -100, 950, 0], {ease:"easeOut"})
    const y2 = useTransform(scrollYProgress, [0, 1], [-12000, -13000]);
    const x2 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [0, -150, 1000, -100, 100])
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])
    const z1 = useTransform(scrollYProgress, [0, .5, 1], [0, -20, 0])
    const color = useTransform(scrollYProgress, [0,1], [.2, .8])
   
    let style = { y: y1, x: x1, scale, rotate: rotation, zIndex: z1}
    let style2 = { y: y2, x: x2, scale, rotate: rotation }
    
    return (
        <motion.div style={{opacity: color}} className="Scroll">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Scroll to see Unicorns</h1>
                </div>
            </div>
            {bunchOfUnicorns.map(unicorn => (
                <ImageBucket {...unicorn} {...style} />
            ))}
            {bunchMoreUnicorns.map(unicorn => (
                <ImageBucket {...unicorn} {...style2} />
            ))}

            {/* <div className="row">
                    {bunchOfUnicorns.map((unicorn) => (<motion.div ref={ref} className="box col-6" style={{ y: y1, x: x2, scale, z: y1, opacity: scale }} >
                        <motion.img src={unicorn.src} style={{top: unicorn.top, left: unicorn.left}}alt="unicorn" ></motion.img>
                    </motion.div>))}
                    {bunchMoreUnicorns.map((unicorn) => (<motion.div
                        className="box col-6"
                        style={{ y: y2, x: x1}}
                    >                <motion.img src={unicorn.src} alt="unicorn" ></motion.img>
                    </motion.div >))}
                </div> */}




        </motion.div>
    )


}
