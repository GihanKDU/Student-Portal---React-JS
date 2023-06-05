import React from 'react'


import Carousel from 'react-bootstrap/Carousel'
import  {  useState } from "react";

export default function Testimonial() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <div className="user-background"></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="user-background"></div>
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="user-background"></div>
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p  data-aos="flip-left">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    )
}
