import React from 'react';
import heroImg1 from "../../../assests/hero/hero1.png"
import heroImg2 from "../../../assests/hero/hero2.png"
const Hero = () => {
    return (
        <div className="carousel w-full" >
  <div id="slide1" className="carousel-item relative w-full" >
    <img src={heroImg1} className="w-full" alt='hero'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full" >
    <img src={heroImg2} className="w-full" alt='hero'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Hero;