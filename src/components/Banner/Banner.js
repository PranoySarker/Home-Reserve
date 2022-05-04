import React from 'react';
import './Banner.css';
import { Button, Card, Carousel } from 'react-bootstrap';
import cover1 from '../../images/Cover/cover1.jpg';
import cover2 from '../../images/Cover/cover2.jpg';
import cover3 from '../../images/Cover/cover3.jpg';

const Banner = () => {
    return (
        <div>
            <div className='card-design'>
                <Card.Body className='p-4'>
                    <Card.Title>
                        <h1>High-Quality Furniture Just For You</h1>
                    </Card.Title>
                    <Card.Text>
                        Our furnitures are made from selected and best quality materials that are suitable for your dream home
                    </Card.Text>
                    <Button className='m-2' variant="outline-dark" size="lg">KNOW ABOUT US</Button>
                </Card.Body>
            </div>
            {/* </div> */}
            <div className='slider'>
                <Carousel className='mt-4'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cover1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cover2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cover3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default Banner;