import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../../Images/Banner/photo1.jpg'
import photo2 from '../../../../Images/Banner/photo2.jpg'
import photo3 from '../../../../Images/Banner/photo3.jpg'
const Banner = () => {
    return (
         <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Designer frames 50% off</h2>
      <p>Save your eyes from sunbeams in summer!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
     <h2>New Dita Sunglasses. </h2>
       <p>Precision, Quality & Longevity</p>                 
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>We love the beach!</h2>
      <p>Best Women Sunglasses</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;