import react from 'react'
import { Button } from './Button'

function HeroSection(){
    return (
        <div className='hero-container'>
            <video src="/Videos/Video-1.mp4" autoPlay loop muted />
            <h1>Adventure awaits</h1>
            <p>What r u waiting 4?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
            </div>

        </div>
    )
}

export default HeroSection