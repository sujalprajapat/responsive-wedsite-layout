import './Listing.css'
import { Container, Row, Col } from 'react-bootstrap';
import list1 from '../img/list1.jpg';
import list2 from '../img/list2.jpg';
import list3 from '../img/list3.jpg';
import list4 from '../img/list4.jpg';
import list5 from '../img/list5.jpg';
import list6 from '../img/list6.jpg';
import list7 from '../img/list7.jpg';
import { RxSlash } from "react-icons/rx";
function List() {
    return (
        <div className='list_sec'>
            <Container>
                <Row className='list_in'>
                    <Col lg={7}>
                    <img src={list1}></img>
                    </Col >
                    <Col lg={5} className='list_text'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                </Row>
                <Row className='list_in'>
                    <Col lg={5} className='list_text order-lg-1 order-2'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                    <Col lg={7} className='order-lg-2 order-1'>
                    <img src={list2}></img>
                    </Col >
                </Row>
                <Row className='list_in'>
                    <Col lg={7}>
                    <img src={list3}></img>
                    </Col >
                    <Col lg={5} className='list_text'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                </Row>
                <Row className='list_in'>
                    <Col lg={5} className='list_text order-lg-1 order-2'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                    <Col lg={7} className='order-lg-2 order-1'>
                    <img src={list4}></img>
                    </Col >
                </Row> <Row className='list_in'>
                    <Col lg={7}>
                    <img src={list5}></img>
                    </Col >
                    <Col lg={5} className='list_text'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                </Row>
                <Row className='list_in'>
                    <Col lg={5} className='list_text order-lg-1 order-2'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col >
                    <Col lg={7} className='order-lg-2 order-1'>
                    <img src={list6}></img>
                    </Col >
                </Row> <Row className='list_in pb-0'>
                    <Col lg={7}>
                    <img src={list7}></img>
                    </Col >
                    <Col lg={5} className='list_text'>
                        <h2>TRIANGLE CONCRETE HOUSE ON LAKE</h2>
                        <div className='d-flex align-items-center'>
                            <b>20 FEB 2023</b>
                            <RxSlash></RxSlash>
                            <a>BY ADMIN</a>
                        </div>
                        <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                        <a>READ MORE</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default List;