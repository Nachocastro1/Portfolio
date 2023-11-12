import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../styles/navstyles.css";

function NavbarComponent() {
  return (
    <Container fluid className='p-0 my-4 d-flex' >
      <Navbar expand="lg" fluid className="bg-fondo fixed-top" variant='secondary'>
        <Container fluid className='mx-0'>
          <Navbar.Brand href="#home" as={Link} to="/" className='text-white ps-5'><h2 className='nav-title'>Nacho-dev</h2></Navbar.Brand>
          <Navbar.Toggle className='navbar-toggler border-white bg-white' />
          <Navbar.Collapse>
            <Nav className="ms-auto my-auto">
              <Nav.Link as={Link} to="/" href='#home' className='text-white me-5'><h2 className='navlinks'>Home</h2></Nav.Link>
              <Nav.Link href="#about-me" className='text-white me-5'><h2 className='navlinks'>Sobre mí</h2></Nav.Link>
              <Nav.Link href="#habilidades" className='text-white me-5' ><h2 className='navlinks'>Habilidades</h2></Nav.Link>
              <Nav.Link href="#contacto" className='text-white me-5'><h2 className='navlinks'>Contacto</h2></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </Container>
  );
}

export default NavbarComponent;