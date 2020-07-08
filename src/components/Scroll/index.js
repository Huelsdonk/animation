import React from 'react'
import { Link } from 'react-router-dom'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import './style.css'
import { bunchOfUnicorns } from "./bunchOfUnicorns"
import { bunchMoreUnicorns } from "./bunchMoreUnicorns"
import ImageBucket from "../ImageBucket"
import Unicorn4 from "./../../assets/unicorn4.png"


export default function Scroll() {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, .3, .7, 1], [1, .1, .7, 1.0]);
    const scale2 = useTransform(scrollYProgress, [0, .3, .7, 1], [.5, 1, .3, 1]);
    const y1 = useTransform(scrollYProgress, [0, 1], [Math.floor(Math.random() * (600 - 300) + 300), Math.floor(Math.random() * (1000 - 500) + 500)]);
    const x1 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [200, 900, -100, 950, 400])
    const y2 = useTransform(scrollYProgress, [0, 1], [-12000, -13000]);
    const x2 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [0, -200, 1200, -100, 100])
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 1080])
    const invRotation = useTransform(scrollYProgress, [0, 1], [360, 0])
    const z1 = useTransform(scrollYProgress, [0, 1], [1000, 20])
    const background = useTransform(scrollYProgress, [0, .5, .75], ["#ff008c", "#7700ff", "rgb(230, 255, 0)"])
    const style = { y: y1, x: x1, scale, rotate: rotation, zIndex: z1 }
    const style2 = { y: y2, x: x2, scale: scale2, rotate: invRotation, zIndex: 0 }

    return (
        <motion.div style={{ background }} className="Scroll">
            <div className="jumbotron jumbotron-fluid bg-violet text-white">
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
            <motion.div>
                <motion.img
                    className="unileftright"
                    initial={{ y: 0 }}
                    animate={{ y: -30000 }}
                    transition={{ duration: 12, loop: "Infinity" }}
                    alt="unicorn"
                    src={Unicorn4}
                ></motion.img>
            </motion.div>

            <Link to="/dragUni"><button className="btn btn-violet btn-lg" id="kazoo">Good Heavens! Even More Unicorns?!?</button></Link>

        </motion.div>
    )


}
