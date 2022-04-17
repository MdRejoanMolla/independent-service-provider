import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../components/image/Boby.png'
import banner2 from '../../components/image/hes5nph.jpg'
import banner3 from '../../components/image/shutterstock.png'
import "./Banner.css"



const Banner = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
      }
      return (
            <Carousel className='w-100' activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner2}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h1>FITNESS FROM HOME</h1>
                              <p>Add This 5-Minute Upper Body Workout To Your Busy Schedele</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner1}
                              alt="Second slide"
                        />

                        <Carousel.Caption className='text'>
                              <h1>An investment in knowledge pays the best interest</h1>
                              <p>Take your career to
                                    the next level.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h1>Hire A Personal Trainer
                                    To Be A Better Self</h1>
                              <p>
                                    Ditch the guesswork and see actual results with bespoke exercise

                                    and meal plan from our team of experts.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banner;