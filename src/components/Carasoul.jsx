import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carasoul = () => {
  return (
    <Carousel interval={1000}> {/* Set the interval to 1000ms (1 second) */}
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg"
        alt="Fourth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg"
        alt="Fifth slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default Carasoul