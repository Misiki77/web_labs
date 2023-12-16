import React from 'react'
import "./Hero.css"
import hero_image from "../Assets/home_page.png"
import background from "../Assets/background.png"

const Hero = () => {

  const heroStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  const textStyles = {
    color: 'white', // Колір тексту білий
  };


  return (
    <div className='hero' style={heroStyles}>
      <div className="hero-left">
        <h2 style={textStyles}>SPECIAL OFFER JUST FOR YOU</h2>
        <div>
          <p style={textStyles}>Playstation 5</p>
          <p style={textStyles}>1tb</p>
          <p style={textStyles}>SpiderMan 2</p>
        </div>
        <button className='buy-now'>Buy now</button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
