import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Achievements.css';

function Achievements() {
  return (
    <Carousel id="achievement" slide={false} fade={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/Imgs/sih.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Recommended by SIH for Incubation under Forge</h3>
          <p>Arc Sjec competed in SIH 2022</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/Imgs/2016-17-achievements.jpg"
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>2016 - 2017: Overall Runners-Up Award</h3>
          <p>Overall Runners Up Award bagged by ARC SJEC</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/Imgs/2018-19-achievement.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>2018 - 2019: Overall Championship Award</h3>
          <p>
            We bagged Overall Championship Award
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Achievements