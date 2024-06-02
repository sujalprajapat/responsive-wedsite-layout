import '../App.css';
import mylogo from '../img/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Contactus from '../Contactus';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container className='d-flex justify-content-between'>
      <div className='col-4 justify-content-center pt-4 logo '>
        <img src={mylogo}></img>
      </div>

      <div className='d-flex d-block d-lg-none align-items-center  justify-content-end text-end col-6'>
        <li><a><IoSearch></IoSearch></a></li>
        <li><a><FaShareNodes></FaShareNodes></a></li>
      </div>
      <>
        <ul className="main_menu d-none d-lg-flex">
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/contactus">CONTACTUS</Link></li>
          <li><Link to="/grid">GRID</Link></li>
          <li><Link to="/listing">LIST</Link></li>
          <li><Link to="/projectdetail">PROJECTDETAIL</Link></li>
          <li><a><IoSearch></IoSearch></a></li>
          <li><a><FaShareNodes></FaShareNodes></a></li>
        </ul>
        {[false,].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 d-block d-lg-none pt-4 bg-text-light">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><Link to="/home">HOME</Link></Nav.Link>
                  <Nav.Link href="#action1"><Link to="/contactus">CONTACTUS</Link></Nav.Link>
                  <Nav.Link href="#action1"><Link to="/grid">GRID</Link></Nav.Link>
                  <Nav.Link href="#action1"><Link to="/listing">LIST</Link></Nav.Link>
                  <Nav.Link href="#action1"><Link to="/projectdetail">PROJECTDETAIL</Link></Nav.Link>
                  {/* <Nav.Link href="#action2">SHORTCODES</Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}
      </>
    </Container>

  );
}
export default Header;