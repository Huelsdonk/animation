import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react' 
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import './style.css'
import Unicorn4 from "./../../assets/unicorn4.png"

export default function Scroll() {
    const [elState, setElState] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    const y = useTransform(scrollYProgress, [elState, elState + 1], [0, -1], {
        clamp: false
      });

    //   useLayoutEffect(() => {
    //     const element = ref.current;
    //     setElState(element.offsetTop);
    //   }, [ref]);

    // try changing x too, get some to move horizontally, some vertically. get this done...

    return (
        <div className="Scroll">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <motion.img src={Unicorn4} alt="unicorn"></motion.img>
                    </div>
                    <div className="col-4">
                        <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                    </div>
                    <div className="col-4">
                        <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-3">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-3">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-3">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn"></motion.img>

                </div>
                <div className="col-2">
                    <motion.img src={Unicorn4} alt="unicorn" style={{y}}></motion.img>

                </div>
            </div>


            <div className="wrapper">
                <motion.div
                    className="container1"
                    style={{
                        y
                    }}
                >
                    <motion.div
                        className="item"
                        style={{
                            y: scrollYProgress
                        }}
                    />

                    
                </motion.div>

            </div>
        </div>
    )


}
