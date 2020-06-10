import React from 'react'
import { motion } from 'framer-motion'
import "./style.css"
import Unicorn from "./../../assets/unicorn.png"

export default function Home() {

    const mainVariants = {
        hidden: {
            x: 2000,
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: .8,
                duration: 2,
                x: {type:"spring"}
            }
        },
    }

    const childVariants = {
        hidden: {
            x: 2000,
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                x: {type:"spring"}
            }
        },
    }
    const childVariantsRev = {
        hidden: {
            x: -2000,
            opacity: 0
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                x: {type:"spring"}
            }
        },
    }



    return (

        <motion.div 
                variants={mainVariants}
                initial="hidden"
                animate="visible"
        >
            <motion.div
                
                variants={childVariants}
                className="jumbotron jumbotron-fluid bg-red text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>

            <motion.div
                
                variants={childVariantsRev}
                className="jumbotron jumbotron-fluid bg-orange text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>

            <motion.div
                
                variants={childVariants}
                className="jumbotron jumbotron-fluid bg-yellow text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>

            <motion.div
                
                variants={childVariantsRev}
                className="jumbotron jumbotron-fluid bg-green text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>

            <motion.div
                
                variants={childVariants}
                className="jumbotron jumbotron-fluid bg-blue text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>

            <motion.div
                
                variants={childVariantsRev}
                className="jumbotron jumbotron-fluid bg-violet text-center">
                <h6>Fluid jumbotron</h6>
            </motion.div>
            <motion.div
                
                variants={childVariants}
                className="bg-sky" id="unicorn">
                <motion.img 
                    initial={{x: -2000}}
                    animate={{x: 500}}
                    transition={{duration: 3, delay: 8}}
                    alt="unicorn" 
                    src={Unicorn}
                    ></motion.img>
            </motion.div>
            <motion.div
                
                variants={childVariantsRev}
                className="bg-earth" id="ground">
                <h1>Ground goes here</h1>
            </motion.div>
        </motion.div>
    )
}
