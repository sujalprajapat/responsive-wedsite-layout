import './About.css'
import grid1 from '../img/grid1.jpg';
import grid2 from '../img/grid2.jpg';
import grid3 from '../img/grid3.jpg';
import grid4 from '../img/grid4.jpg';
import grid5 from '../img/grid5.jpg';
import grid6 from '../img/grid6.jpg';
import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function About() {
    const option = {
            center:true,
        responsive: {
          0: {
            items:1,
          },
        }
    }
    return (
        <div>
            <Row>
                <Col className='w-50'>
                    <OwlCarousel className='owl-theme welcome' {...option}>
                        <div class='item'>
                            <img src={grid1}></img>
                        </div>
                        <div class='item'>
                            <img src={grid2}></img>
                        </div>
                        <div class='item'>
                            <img src={grid3}></img>
                        </div>
                        <div class='item'>
                            <img src={grid4}></img>
                        </div>
                        <div class='item'>
                            <img src={grid5}></img>
                        </div>
                        <div class='item'>
                            <img src={grid6}></img>
                        </div>
                    </OwlCarousel>
                </Col>
                <Col>
                <div>
                    <h1>ABOUT US</h1>
                </div>
                </Col>
            </Row>
        </div>
    )
}
export default About;