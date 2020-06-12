import React from 'react'
import { motion } from 'framer-motion'
import "./style.css"
import Unicorn from "./../../assets/unicorn.png"
import Unicorn2 from "./../../assets/unicorn3.png"
import Unicorn4 from "./../../assets/unicorn4.png"
import Unicorn8 from "./../../assets/unicorn8.png"
import Unicorn13 from "./../../assets/unicorn13.png"


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
                x: { type: "spring" }
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
                x: { type: "spring" }
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
                x: { type: "spring" }
            }
        },
    }
    const uniHover = {
        scale: 1.05,
        boxShadow: "2px 2px 10px 10px purple",

    }
    const uniPeek = {
        
    }


    return (

        <motion.div
            variants={mainVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div

                variants={childVariants}
                whileHover={uniHover}

                className="jumbotron jumbotron-fluid bg-red text-center">
                <img src={Unicorn2}></img>
            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}

                className="jumbotron jumbotron-fluid bg-orange text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariants}
                whileHover={uniHover}

                className="jumbotron jumbotron-fluid bg-yellow text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}

                className="jumbotron jumbotron-fluid bg-green text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariants}
                whileHover={uniHover}
                className="jumbotron jumbotron-fluid bg-blue text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}
                className="jumbotron jumbotron-fluid bg-violet text-center">
                <motion.img 
                    src={Unicorn2}></motion.img>

            </motion.div>
            <motion.div

                variants={childVariants}
                className="bg-primary" id="unicorn">
                <motion.img
                    initial={{ x: -1500 }}
                    animate={{ x: 1500 }}
                    transition={{ duration: 3, delay: 8, loop: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn}
                ></motion.img>
                <motion.img
                    initial={{ x: -1500 }}
                    animate={{ x: 1500 }}
                    transition={{ duration: 3, delay: 9, loop: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn4}
                ></motion.img>
                
                
            </motion.div>
            <motion.div

                variants={childVariantsRev}
                 id="ground">
                <h1>Unicorn Town</h1>
                
                 <motion.img
                    initial={{ x: -600}}
                    animate={{ x: -400 }}
                    transition={{ duration: 3, delay: 9, yoyo: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn4}
                ></motion.img>
                 <motion.img
                    initial={{ x: 1000}}
                    animate={{ x: 800 }}
                    transition={{ duration: 3, delay: 9, yoyo: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn8}
                ></motion.img>
                 <motion.img
                    id="bottomUni"
                    initial={{ y: 370, x:-500}}
                    animate={{ y: 100, x:-500}}
                    transition={{ duration: 3, delay: 9, yoyo: "Infinity", }}

                    alt="unicorn"
                    src={Unicorn13}
                ></motion.img>
                 <motion.img
                    id="bottomUni2"
                    initial={{ y: -15, x:1100}}
                    animate={{ y: -200, x:1100 }}
                    transition={{ duration: 3, delay: 7, yoyo: "Infinity", }}

                    alt="unicorn"
                    src={Unicorn13}
                ></motion.img>
                 
            </motion.div>
        </motion.div>
    )
}
