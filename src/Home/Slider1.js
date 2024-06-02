import '../App.css';
import slider1 from "../img/slide1.jpg";
import slider2 from "../img/slide2.jpg";
import slider3 from "../img/slide3.jpg";

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Container } from 'react-bootstrap';

import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider1() {
  const option = {
    center:true,
    responsive: {
      0: {

        items:1,
        dots:true,
        nav:false,
      },
      800:
      {
        items: 1,
        dots: false,
        nav: true,
      },
    }
  }
  return (
    //       <Container>
    //         <div className='slider'>

    // <img src={slider1}></img>

    // <div className='flex np_btn'>
    //   <div><GrFormPrevious></GrFormPrevious></div>
    //   <div ><MdNavigateNext></MdNavigateNext></div>
    // </div>
    // </div>
    // </Container>
    <Container>
      <OwlCarousel className='owl-theme slider_1' loop margin={10} {...option}>
        <div class='item'>
          <img src={slider1}></img>
          <div className='slider_head row'>
            <div className='flex col-8'>
              <h1 style={{ color: "yellow" }}>DESIGN </h1><h1 style={{ color: "yellow" }}>TO</h1><h1>REALITY</h1>
            </div>
            <div className='d-none d-md-block'>
              <p>our company takes orders to external architecture office & edited,designed and creted</p>
            </div>
          </div>
          <div className='slider_btn'>
            <a>READ MORE</a>
          </div>
        </div>
        <div class='item'>
          <img src={slider2}></img>
          <div className='slider_head row'>
            <div className='flex col-11'>
              <h1 style={{ color: "yellow" }}>YOUR DREAM </h1><h1>REALITY</h1>
            </div>
            <div className='d-none d-md-block'>
              <p>our company takes orders to external architecture office & edited,designed and creted</p>
            </div>
          </div>
          <div className='slider_btn'>
            <a>READ MORE</a>
          </div>
        </div>
        <div class='item'>
          <img src={slider3}></img>
          <div className='slider_head row'>
            <div className='flex col-4'>
              <h1 style={{ color: "yellow" }}>MODERN </h1><h1>DESIGN</h1>
            </div>
            <div className='d-none d-md-block'>
              <p>our company takes orders to external architecture office & edited,designed and creted</p>
            </div>
            </div>
        </div>
      </OwlCarousel>
    </Container>


  );
}

export default Slider1;