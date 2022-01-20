import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <div className='main_hero'>
            <h1>Have you tried <br />our starters yet? <br />Visit us today!</h1>
            <button className='hero_btn'>
                <Link className='hero_btn_link' to='/product'>Try Now</Link>
            </button>
        </div>
    )
}

export default Hero
