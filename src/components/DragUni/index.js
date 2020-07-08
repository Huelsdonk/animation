import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./style.css"
import Unicorn16 from "./../../assets/unicorn16.png"

export default function DragUni() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(x, [-500, 500], [.5, .9]);
    const boxShadow = useTransform(y, [-500, 500], ["inset 50px 50px 50px 50px rgb(0, 0, 255), inset -50px -50px 50px 50px rgb(0, 0, 255)", "inset 12px 12px 20px 10px rgb(200, 150, 100), inset -12px -12px 20px 10px rgb(200, 150, 100)"]);
    const background = useTransform(x, [-500, 500], ['rgb(0,255,0)', "rgb(255,0,255)"])


    return (
        <motion.div

            className="uniDiv"
            style={{ background, boxShadow }}>
            <h1 className="text-center text-success">Drag the Unicorn Around</h1>
            <motion.img
                className="unicorn"
                src={Unicorn16}
                drag
                dragConstraints={{ left: -200, right: 200, top: 0, bottom: 0 }}
                style={{ x, y, scale }}
            ></motion.img>
            <Link to="/"><button className="btn btn-violet btn-lg" id="kazoo">Back Home</button></Link>

        </motion.div>
    )
}
