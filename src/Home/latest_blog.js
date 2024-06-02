// import '../App.css';
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';
import s5 from '../img/s5.png';
import s6 from '../img/s6.png'
import sec3_1 from '../img/sec3.1.jpeg';
import sec3_2 from '../img/sec3.2.jpeg';
import sec3_3 from '../img/sec3.3.jpeg';
import { Container,Row,Col } from 'react-bootstrap';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Latest_blog() {
  const option = {

    // center:true,
    responsive: {
      0: {
        items:2,
      },
      580:{
        items:3,
      },
      992:{
        items:4,
      },
      1152:{
        items:5,
      },

    }
}
    return(
      <Container>
        <div className='sec3'>
        <h5>Latest Blog</h5>
        <Row className='row-cols-1 row-cols-lg-2'>
          <Col className=''>
            <div className='img1'>
              <div >
                <img src={sec3_1}></img>
              </div>
              <div className='flex img_sec'>
                <p className='date'>10 AUG 2023</p>
                <h6>TITLE OF THIS BLOG POST</h6>
              </div>
            </div>
            <div className='img2'>
              <div >
                <img src={sec3_2}></img>
              </div>
              <div className='flex img_sec'>
                <p className='date'>10 AUG 2023</p>
                <h6>TITLE OF THIS BLOG POST</h6>
              </div>
            </div>
          </Col>
          <Col className='sec3_img3 pt-3'>
          <img src={sec3_3}></img>
                  <p className='date1'>10 AUG 2023</p>
            <div className='sec3_in'>
              <h4>
                    Small & Minimal House On Paters on Hill
              </h4>
              <p>typefaces and layouts, and in appeara nce of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
              <a>READ MORE</a>
            </div>
          </Col>
        </Row>
        <div className='s_title'>
          <h2>Blog</h2>
          <h4>Post</h4>
        </div>
        <OwlCarousel className='owl-theme welcome col-12'  {...option}>
        <div class='item'>
          <img src={s1}></img>
        </div>
        <div class='item'>
          <img src={s2}></img>
        </div>
        <div class='item'>
          <img src={s3}></img>
        </div>
        <div class='item'>
          <img src={s4}></img>
        </div>
        <div class='item'>
          <img src={s5}></img>
        </div>
        <div class='item'>
          <img src={s6}></img>
        </div>
        </OwlCarousel>
      </div>
      </Container>

    )
}
export default Latest_blog;