import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./style.css"
import Unicorn from "./../../assets/unicorn.png"
import Unicorn2 from "./../../assets/unicorn3.png"
import Unicorn4 from "./../../assets/unicorn4.png"
import Unicorn8 from "./../../assets/unicorn8.png"
import Unicorn13 from "./../../assets/unicorn13.png"
import Unicorn11 from "./../../assets/unicorn11.png"
import Unicorn20 from "./../../assets/unicorn20.png"
import Unicorn45 from "./../../assets/unicorn45.png"

export default function DragUni() {
    return (
        <div>
            <motion.img src={Unicorn} 
            drag
            dragConstraints={{left:0, right:0, top:0, bottom:0}}
            ></motion.img>
        </div>
    )
}
