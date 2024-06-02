// import '../App.css'
import logo1 from '../img/logo1.png';
import { RxSlash } from "react-icons/rx";
import { Container,Col,Row } from 'react-bootstrap';
function Footer() {
    return(
      
        <div className='footer '>
          <Container>
        <Row className='container flex footer_in row-cols-1 row-cols-lg-3'>
          <Col className='d-flex justify-content-center pb-3' >
          <img src={logo1}></img>
          </Col>
          <Col className='d-flex justify-content-center pb-3'>
          <p>© 2023 Your Company. Designed By thememajestic</p>
          </Col>
          
          <Col className='d-flex justify-content-center align-items-center pb-3'>
            <p>terms & condition</p>
            <RxSlash style={{ color: "grey"}}></RxSlash>
            <p>privacy policy</p>
            <RxSlash style={{ color: "grey" }}></RxSlash>
            <p>contact us</p>
          </Col>
        </Row>
        </Container>
    </div>
    
    )
}
export default Footer;