import '../App.css';
import sec1 from '../img/sec1.jpeg';
import { Container,Row,Col } from 'react-bootstrap';
function Welcome(){
    return(
      <div className='sec1'>
      <Container>
        <Row  className='m_sec1 row-cols-1 row-cols-lg-2 py-4'>
          <Col className='content col-12 col-lg-6'>
            <h3>Welcome</h3>
            <h5>We are creative</h5><h5> Building - Design</h5><h5> Company</h5>
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general</p>
            <p>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general the content of dummy text is nonsensical.</p>
            <div className='btn'><a>READ MORE</a></div>
          </Col>
          <Col className='img col-12 col-lg-6'>
            <img src={sec1} className='in_img'></img>
          </Col>
        </Row>
        
        <div className=' s_title container'>
          <h2>18 YEAR</h2>
          <h4> working experince</h4>
        </div>
        </Container>
              </div>
      

    )
}
export default Welcome;