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
            size={100}
        >
            <motion.div

                variants={childVariants}
                whileHover={uniHover}

                className="jumbotron uniJumbo jumbotron-fluid bg-red text-center">
                <img src={Unicorn2}></img>
            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}

                className="jumbotron uniJumbo jumbotron-fluid bg-orange text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariants}
                whileHover={uniHover}

                className="jumbotron uniJumbo jumbotron-fluid bg-yellow text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}

                className="jumbotron uniJumbo jumbotron-fluid bg-green text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariants}
                whileHover={uniHover}
                className="jumbotron uniJumbo jumbotron-fluid bg-blue text-center">
                <img src={Unicorn2}></img>

            </motion.div>

            <motion.div

                variants={childVariantsRev}
                whileHover={uniHover}
                className="jumbotron uniJumbo jumbotron-fluid bg-violet text-center">
                <motion.img
                    src={Unicorn2}></motion.img>

            </motion.div>
            <motion.div

                variants={childVariants}
                className="bg-primary row" id="unicorn">
                <motion.img
                    className="col-6 unileftright1"
                    initial={{ x: '-60vw' }}
                    animate={{ x: '110vw' }}
                    transition={{ duration: 3, delay: 8, loop: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn}
                ></motion.img>
                <motion.img
                    className="col-6 unileftright"
                    initial={{ x: '-100vw' }}
                    animate={{ x: '115vw' }}
                    transition={{ duration: 3, delay: 9, loop: "Infinity" }}

                    alt="unicorn"
                    src={Unicorn4}
                ></motion.img>


            </motion.div>
            <div className="container-fluid">
                <motion.div
                    className="row"
                    variants={childVariantsRev}
                    id="ground">

                    <motion.img
                        className="col-6"
                        initial={{ x: "-50vw" }}
                        animate={{ x: "-10vw" }}
                        transition={{ duration: 3, delay: 9, yoyo: "Infinity" }}

                        alt="unicorn"
                        src={Unicorn20}
                    ></motion.img>

                    {/* <motion.img
                        className="col-3"

                        id="bottomUni"
                        initial={{ y: '100vh', x: 0 }}
                        animate={{ y: '10vh', x:0 }}
                        transition={{ duration: 3, delay: 9, yoyo: "Infinity", }}

                        alt="unicorn"
                        src={Unicorn13}
                    ></motion.img> */}

                    <motion.img
                        className="col-6"
                        initial={{ x: "70vw" }}
                        animate={{ x: "20vw" }}
                        transition={{ duration: 3, delay: 9, yoyo: "Infinity" }}

                        alt="unicorn"
                        src={Unicorn11}
                    ></motion.img>

                </motion.div>
            </div>
            <motion.div className="jumbotron jumbotron-fluid bg-gradient-violet text-center"
                style={{ marginBottom: 0 }}
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 10 }}
            >
                <span><motion.img src={Unicorn45}
                    initial={{ x: -10, y: 10, rotate: -30 }}
                    animate={{ x: -10, y: -10, rotate: 30 }}
                    transition={{ yoyo: Infinity }}
                ></motion.img></span><Link to="/scroll"><motion.button

                    className="btn-lg"
                    whileHover={{
                        scale: 1.3,
                        transition: {
                            yoyo: Infinity
                        }
                    }}
                >MORE UNICORNS!!!!</motion.button></Link><span><motion.img src={Unicorn45}
                    initial={{ x: 10, y: 10, rotate: 30 }}
                    animate={{ x: 10, y: -10, rotate: -30 }}
                    transition={{ yoyo: Infinity }}
                ></motion.img></span>
            </motion.div>
        </motion.div>
    )
}
