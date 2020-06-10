import React from 'react'
import { motion } from 'framer-motion'
import "./style.css"
import Unicorn from "./../../assets/unicorn.png"

export default function Home() {
    return (
        
        <div>
            <div className="jumbotron jumbotron-fluid bg-red text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
        
            <div className="jumbotron jumbotron-fluid bg-orange text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
        
            <div className="jumbotron jumbotron-fluid bg-yellow text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
        
            <div className="jumbotron jumbotron-fluid bg-green text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
        
            <div className="jumbotron jumbotron-fluid bg-blue text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
        
            <div className="jumbotron jumbotron-fluid bg-violet text-center">
                    <h6>Fluid jumbotron</h6>
            </div>
            <div className="bg-sky" id="unicorn">
                <img alt="unicorn" src={Unicorn}></img>
            </div>
            <div className="bg-earth" id="ground">
                <h1>Ground goes here</h1>
            </div>
        </div>
    )
}
