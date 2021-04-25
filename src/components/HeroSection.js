import React from 'react'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/video-2.mp4" autoPlay loop />
            <h1>A AVENTURA TE ESPERA</h1>
            <p>O que você está esperando?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>BORA</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>ASSISTA AO TREILER <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
