import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="Carousel">
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
          alt="First slide"
        />
        <Carousel.Caption className="carouselTitle">
          <h1>We Combine Design and Creativity</h1>
          <p>
            Create just what you need for your Perfect Website. Choose from a
            wide range of Elements & simply put them on our Canvas
          </p>
          <Button variant="warning">
            <NavLink className="nav-link " aria-current="page" to="/service">
              EXPLORE US
            </NavLink>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
          alt="Second slide"
        />

        <Carousel.Caption className="carouselTitle">
          <h1>Crafing digital Experince</h1>
          <p>
            Our glorious history is the result of our Excellence, Quality,
            Sustainability & Team Work.Choose us, we promise big results!
          </p>
          <Button variant="warning">
            <NavLink className="nav-link " aria-current="page" to="/service">
              EXPLORE US
            </NavLink>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
