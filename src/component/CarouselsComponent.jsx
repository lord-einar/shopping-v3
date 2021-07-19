import React from "react";
import { Carousel, Container } from "react-bootstrap";

function CarouselsComponent() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/slide-smartwatch.png"
              alt="First slide"
              height="300"
              width='1000'
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100"
              src="./img/slide-indumentaria.png"
              alt="First slide"
              height="300"
              width='1000'
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100"
              src="./img/slide-informatica.png"
              alt="First slide"
              height="300"
              width='1000'
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default CarouselsComponent;
