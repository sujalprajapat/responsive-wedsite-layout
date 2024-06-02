import './Project.css';
import '../App.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import logo1 from '../img/logo1.png';
import { RxSlash } from "react-icons/rx";
import { Container,Col,Row } from 'react-bootstrap';
function Project(){
    return(
            <div>
                 <Container>
                    <Row className='project row-cols-1 row-cols-lg-2'>
                        <Col className=''>
                        </Col>
                        <Col className='projectin'>
                            <div className='text'>
                            <h1>SMALL & MINIMAL HOUSE ON PATERS ON HILL</h1>
                            <p>Typefaces and layouts, and in appeara nce of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                            <div className='d-flex justify-content-between'>
                                <div className='text_in'>
                                    <h5>DATE</h5>
                                    <p>January 08, 2023</p>
                                </div>
                                <div className='text_in'>
                                    <h5>DATE</h5>
                                    <p>January 08, 2023</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between text-start'>
                                <div className='text_in'>
                                    <h5>DATE</h5>
                                    <p>January 08, 2023</p>
                                </div>
                                <div className='text_in'>
                                    <h5>DATE</h5>
                                    <p>January 08, 2023</p>
                                </div>
                            </div>
                            <ul className='d-flex p-0'>
                                <li><FaFacebookF></FaFacebookF></li>
                                <li><FaFacebookF></FaFacebookF></li>
                                <li><FaFacebookF></FaFacebookF></li>
                                <li><FaFacebookF></FaFacebookF></li>
                                <li><FaFacebookF></FaFacebookF></li>
                                <li><FaFacebookF></FaFacebookF></li>
                            </ul>
                            </div>
                            
                        </Col>
                    </Row>
                 </Container>
                 <div className='footer1 footer '>
          <Container>
        <Row className='container flex footer_in row-cols-1 row-cols-lg-3'>
          <Col className='d-flex justify-content-center pb-3' >
          <img src={logo1}></img>
          </Col>
          <Col className='d-flex justify-content-center pb-3'>
          <p>© 2023 Your Company. Designed By thememajestic</p>
          </Col>
          
          <Col className='d-flex justify-content-center  pb-3'>
            <p>terms & condition</p>
            <RxSlash style={{ color: "grey" }}></RxSlash>
            <p>privacy policy</p>
            <RxSlash style={{ color: "grey" }}></RxSlash>
            <p>contact us</p>
          </Col>
        </Row>
        </Container>
    </div>
            </div>
    )
}
export default Project;