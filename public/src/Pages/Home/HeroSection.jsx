import React from 'react'
import "./Hero.css"

function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Anuj Bhadoria</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer(MERN)
          </h1>
          <p className="hero--section-description">
          Aspiring frontend developer eager to contribute fresh perspectives and a strong foundation in web development to create intuitive and dynamic user interfaces

          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <div className='myimg'></div>
      </div>
    </section>
  )
}

export default HeroSection