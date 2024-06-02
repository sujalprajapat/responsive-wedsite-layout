import '../App.css';
import sec5_1 from '../img/sec5.1.jpeg';
import sec5_2 from '../img/sec5.2.jpeg';
import { FaQuoteLeft  } from "react-icons/fa6";
import { Container } from 'react-bootstrap';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Testimonial() {
      const option = {
            dots:true,
            responsive: {
              0: {
        
                items:1,
              },
              996:
              {
                items: 2,
              },
            }
          }
    return(
      <Container>
        <div className='sec5'>
         <h5>Latest Blog</h5>
         <OwlCarousel className='owl-theme welcome'  {...option}>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        <div class='item'>
        <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
        </div>
        </OwlCarousel>
         {/* <div className='flex'>
          <div className='w-50'>
                <img src={sec5_1}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
          </div>
          <div className='w-50'>
          <img src={sec5_2}></img>
                <div className='test'>
                      <h3>taylor willson</h3>
                      <p>co-founder associated</p>
                      <FaQuoteLeft className='icon'></FaQuoteLeft>
                      <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                </div>
          </div>
         </div> */}
         <div className='s_title container'>
          <h2>client</h2>
          <h4>say</h4>
        </div>
      </div>
      </Container>
    )
}
export default Testimonial;