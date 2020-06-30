import { bunchOfUnicorns } from "../Scroll/bunchOfUnicorns";
import { bunchMoreUnicorns } from "../Scroll/bunchMoreUnicorns";
import './style.css';
import React from 'react';
import { useState, useRef, useLayoutEffect } from 'react'
import { useViewportScroll, motion, useTransform, useSpring } from 'framer-motion'

// usetransform zINDEX plus z (z translate). figure out how to arrange images
// and then just get them moving. then, call it good.


export default function ImageBucket({ src, ...style }) {
    // const [elTop, setElTop] = useState(0)
    // const ref = useRef(null)
    const { scrollY } = useViewportScroll()
    const { scrollX } = useViewportScroll();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1.0]);
    let arra = []
    const booger = () => {
        for (let i = 0; i < 5; i++) {
            arra.push(Math.floor(Math.random() * (1000 - 500) + 500))

        }
    }

    // const y1 = useTransform(scrollYProgress, [elTop, elTop + 1], [Math.floor(Math.random() * (600 - 300) + 300), Math.floor(Math.random() * (1000 - 500) + 500)]);
    // const x1 = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [0, -500, 500, -500, 0])
    // const y2 = useTransform(scrollYProgress, [0, elTop + 1], [0, 2000]);
    // const x2 = useTransform(scrollYProgress, [0, .5, .75, 1], [-600, 400, -800, 200])
    // const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])
    // const z1 = useTransform(scrollYProgress, [0, .5, 1], [0, -20, 0])

    // useLayoutEffect(() => {
    //     const element = ref.current;
    //     setElTop(element.offsetTop);

    // }, [ref])
    return (
        <div className="ImageBucket">
            <motion.img  src={src} style={{...style}} alt="unicorn" ></motion.img>


        </div>

    )
}
