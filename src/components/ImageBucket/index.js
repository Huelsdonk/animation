import './style.css';
import React from 'react';
import { motion } from 'framer-motion'

export default function ImageBucket({ src, ...style }) {

    return (
        <div className="ImageBucket">
            <motion.img src={src} style={{ ...style }} alt="unicorn" ></motion.img>

        </div>
    )
}
