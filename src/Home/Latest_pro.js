// import '../App.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { RxSlash } from "react-icons/rx";
import sec2_1 from '../img/sec2.1.jpeg';
import sec2_2 from '../img/sec2.2.jpeg';
import sec2_3 from '../img/sec2.3.jpeg';
import { Container } from 'react-bootstrap';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Latest_pro() {
    const option = {
        nav: true,
        dots:false,
        // center:true,
        responsive: {
          0: {
            items:1,
          },
          580:{
            items:2,
          },
          992:{
            items:3,
          },
          1152:{
            items:4,
          },
          1365:{
            items:5,
          }

        }
    }
    return (
        <Container>
        <div className='sec2'>
            <h5>Latest Project</h5>
            <div className='list d-flex align-items-center '>
                <p>All project</p>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <p>building</p>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <p>interior</p>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <p>restaurant</p>
            </div>
            <Container>
      <OwlCarousel className='owl-theme welcome' loop margin={10} {...option}>
        <div class='item'>
          <img src={sec2_1}></img>
        </div>
        <div class='item'>
          <img src={sec2_2}></img>
        </div>
        <div class='item'>
          <img src={sec2_3}></img>
        </div>
        <div class='item'>
          <img src={sec2_2}></img>
        </div>
        <div class='item'>
          <img src={sec2_1}></img>
        </div>
        <div class='item'>
          <img src={sec2_2}></img>
        </div>
        <div class='item'>
          <img src={sec2_3}></img>
        </div>
        </OwlCarousel>
        </Container>
            <div className='s_title container'>
                <h2>Awesome</h2>
                <h4>Designs</h4>
            </div>
        </div>
        </Container>
    )
}
export default Latest_pro;