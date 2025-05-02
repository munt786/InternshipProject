import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";
function MyNavbar() {
  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container fluid>
      <Navbar.Brand>
  <Link to="/home">
    <Image 
      src="AaakaaiLogo.jpg" 
      rounded 
      style={{ height: '60px', width: '200px', objectFit: 'contain' }} 
    />
  </Link>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{flexGrow:'0'}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home"> Home </Nav.Link>
            <Nav.Link as={Link} to="/aboutus"> About Us </Nav.Link>
            <Nav.Link as={Link} to="/ourservices"> Our Services </Nav.Link>
            <Nav.Link as={Link} to="/ourstrength"> Our Strength </Nav.Link>
            <NavDropdown title="Associate Companies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Company 1</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Company 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contactus"> Contact Us </Nav.Link>
            <div className="d-flex gap-2">
                <Button variant="primary" size="sm" className='custom-orange-btn'>
                Sign Up
                </Button>
                <Button variant="primary" size="sm" className='custom-orange-btn'>
                Login
                </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;