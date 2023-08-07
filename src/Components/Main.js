import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 // Import the carousel styles
 import farming1 from "./images/farming1.jpeg"
 import farming2 from "./images/farming2.jpg"
 import farming3 from "./images/farming3.webp"
 import farming4 from "./images/farming4.webp"
 import farming5 from "./images/farming5.jpg"

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ptag={
    fontSise:'15px'
  }

  const images = [
    farming5,
    farming1,
    farming2,
    farming3,
    farming4,
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Change the duration (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div>
      <div className='main'>
        <bold>
          <h2><pre>Empowering Society
          </pre><pre>
            Through Science
          </pre>
          
          </h2>
        </bold>
        <div className='ptag'>       
           <p>Food Lab is One Point Solution for all food safety needs</p>
        </div>        
        <div className='button'>
        <button type="submit">get started</button>

        </div>
      </div>
      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        autoPlay
        interval={5000} // Adjust the interval between slides (in milliseconds)
        infiniteLoop
      >
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt="farming" />
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default ImageCarousel;
