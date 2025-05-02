import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function MyNavbar() {
    const navigate = useNavigate();
    const authentication = localStorage.getItem("data");

    function handleLogout() {
        localStorage.removeItem("data");
        navigate("/") // Redirect to login page
      }

  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container fluid>
      <Navbar.Brand href="#">
        <Image 
            src="AaakaaiLogo.jpg" 
            style={{ width: "170px", height: "60px", objectFit: "contain" }} 
        />
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{flexGrow:'0'}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href='#action3'>Our Services</Nav.Link>
            <Nav.Link href='#action4'>Our Strength</Nav.Link>
            <NavDropdown title="Associate Companies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Company 1</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Company 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action 7">Contact Us</Nav.Link>
            <div className="d-flex gap-2">
              <Button size="sm" className="custom-orange-btn">Sign Up</Button>
              <Button size="sm" className="custom-orange-btn">Login</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;