import './Grids.css';
import { Container,Row,Col } from 'react-bootstrap';
import { RxSlash } from "react-icons/rx";
import grid1 from '../img/grid1.jpg';
import grid2 from '../img/grid2.jpg';
import grid3 from '../img/grid3.jpg';
import grid4 from '../img/grid4.jpg';
import grid5 from '../img/grid5.jpg';
import grid6 from '../img/grid6.jpg';

function Grids(){
    return(
        <div>
            <Container>
            <div className='d-flex align-items-center mb-0 py-5 flex-wrap '>
                <a className='px-2'>ALL</a>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <a className='px-2'>HOUSE</a>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <a className='px-2'> BUILDING</a>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <a className='px-2'>OFFICE</a>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <a className='px-2'>GARDEN</a>
                <RxSlash style={{ color: "grey" }}></RxSlash>
                <a className='px-2'>INTERIOR</a>
            </div>
            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 grid'>
                <Col >
                <img src={grid1}></img>
                </Col>
                <Col>
                <img src={grid2}></img>
                </Col>
                <Col>
                <img src={grid3}></img>
                </Col>
                <Col>
                <img src={grid4}></img>
                </Col>
                <Col>
                <img src={grid5}></img>
                </Col>
                <Col>
                <img src={grid6}></img>
                </Col>
                <Col>
                <img src={grid1}></img>
                </Col>
                <Col>
                <img src={grid2}></img>
                </Col>
                <Col>
                <img src={grid3}></img>
                </Col>
                <Col>
                <img src={grid4}></img>
                </Col>
                <Col>
                <img src={grid5}></img>
                </Col>
                <Col>
                <img src={grid6}></img>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Grids;