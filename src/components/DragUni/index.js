import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./style.css"
import Unicorn from "./../../assets/unicorn.png"
import Unicorn2 from "./../../assets/unicorn3.png"
import Unicorn4 from "./../../assets/unicorn4.png"
import Unicorn8 from "./../../assets/unicorn8.png"
import Unicorn13 from "./../../assets/unicorn13.png"
import Unicorn16 from "./../../assets/unicorn16.png"
import Unicorn20 from "./../../assets/unicorn20.png"
import Unicorn45 from "./../../assets/unicorn45.png"

export default function DragUni() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const scale = useTransform(x, [-500,500], [.5, .9]);

    const boxShadow = useTransform(y, [-500,500], ["inset 50px 50px 50px 50px rgb(0, 0, 255), inset -50px -50px 50px 50px rgb(0, 0, 255)", "inset 12px 12px 20px 10px rgb(200, 150, 100), inset -12px -12px 20px 10px rgb(200, 150, 100)"]);
    // const background = useTransform(x, [-100,0,100], [
    //     "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    //     "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    //     "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    //   ]);
    const background = useTransform(x, [-500, 500], ['rgb(0,255,0)', "rgb(255,0,255)"])

    // const background = `${colorB} + ${colorA}`
    
    return (
        <motion.div 
            className="uniDiv"
            style={{ background, boxShadow}}>
            <motion.img 
            className="unicorn"
            src={Unicorn16} 
            drag
            dragConstraints={{left:-200, right:200, top:0, bottom:0}}
            style={{x,y,scale}}
            ></motion.img>
        </motion.div>
    )
}
