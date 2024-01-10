import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Header = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
  
    return (
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          <div>
            <img
              src="https://www.maramani.com/cdn/shop/files/5-revision.jpg?v=1641901298"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://www.maramani.com/cdn/shop/files/two.jpg?v=1624885933"
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://www.maramani.com/cdn/shop/files/v5.jpg?v=1629806667"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://www.maramani.com/cdn/shop/files/40000_Post.jpg?v=1624884291"
              alt="image 4"
              className="h-full w-full object-cover"
            />
          </div>
        </Slider><br></br>
        <h1 className='text-2xl font-bold text-wrap text-center'>Welcome to Maramani.com</h1>
        <p className="text-left text-lg md:text-xl lg:text-lg font-normal leading-relaxed my-4 mx-auto max-w-2xl">
If you’re looking to design your dream home but don’t know where to begin, you’re in the right place! At Maramani.com, we offer readymade house plans created by top floor plan designers. You can download one of our existing plans or place a *custom order with different specifications!</p>
      </div>
    );
  }
  
  export default Header;