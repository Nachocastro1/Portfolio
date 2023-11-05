import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navstyles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Container fluid className='p-0 my-4 d-flex' >
      <Navbar expand="lg" fluid  className="bg-fondo fixed-top" variant='secondary'>
        <Container fluid className='mx-0'>
          <Navbar.Brand href="#home" as={Link} to="/Home" className='text-white ps-5'><h2 className='nav-title'>Nacho-dev</h2></Navbar.Brand>
          <Navbar.Toggle className='navbar-toggler border-white bg-white' />
          <Navbar.Collapse>
            <Nav className="ms-auto my-auto">
              <Nav.Link as={Link} to="/Home" href='#home' className='text-white me-5'><h2 className='navlinks'>Home</h2></Nav.Link>
              <Nav.Link href="#about-me" className='text-white me-5'><h2 className='navlinks'>Sobre mí</h2></Nav.Link>
              <Nav.Link href="#habilidades" className='text-white me-5' ><h2 className='navlinks'>Habilidades</h2></Nav.Link>
              <Nav.Link href="#link" className='text-white me-5'><h2 className='navlinks'>Contacto</h2></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </Container>
  );
}

export default NavbarComponent;