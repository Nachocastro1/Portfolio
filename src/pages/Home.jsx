import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Projects from '../components/projects';
import '../styles/home.css';

const proyectos = [
  {
    id: 1,
    title: 'PataSana Web',
    description: 'Proyecto final realizado en cursado de RollingCode School.',
    imageSrc: '/../../public/imagenes/proyecto1.jpg',
    url: 'https://pata-sana-web-git-dev-juandurso.vercel.app/home',
    readme: 'Tecnologias Utilizadas: FrontEnd: HTML, CSS, Javascript, React-JS. BackEnd: Express, Node.js. Base de datos: MongoDB. Principales Funcionalidades: Gestion de mascotas, Programacion de turnos, Historial Médico, Perfil Veterinario.',
  },





];



<Projects proyectos={proyectos} />

function Home() {
  return (
    //  seccion 1

    <Container fluid="true" className='mt-5 w-100'  >
      <Row fluid="true" className='seccion-uno d-flex' id="home">
        <Col md={6} sm={12} xs={12} fluid className='col-xs-12 text-inicio mt-1'>

          <Col md={12} xs={6} className='mb-3 mx-3 text-edit my-5'> <h2>Hola! Soy Nacho Castro😉</h2></Col>
          <Col className='mb-3 mx-3 title-one m5-5 d-flex align-items-end'> <h1>FullStack Web Developer</h1></Col>
          <Col className='mb-3 mx-3 text-edit my-5 d-flex align-items-end'> <h4>Mi nombre es Nacho acá conoceras un poco mi historia en el mundo de la programacion y cuales son los proyectos en los que participé. Tambien Obtendras informacion sobre como contactarme.</h4></Col>
          <Col className='mb-3 mx-3'><Button variant='outline-warning' href='https://www.linkedin.com/in/nachocastrodev/'>Contrátame</Button></Col>
        </Col>
        <Col className='mt-1 p-5  d-flex justify-content-center align-items-center'>
          <Button variant="warning" className='mx-5 btn-custom' size="lg" href='#proyectos'>Ver mis proyectos</Button>
          <Button variant="warning" size="lg" href='#about-me'>Mas sobre mi</Button>
        </Col>
      </Row>
      {/* fin seccion 1 */}
      {/* seccion 2 */}

      <Container fluid className='w-100 px-0'>
        <Row className=''>
          <Col xs={12} md={6} className='seccion-four '><Image src="/../../public/imagenes/fondo2.png" width={500} height={300}></Image></Col>
          <Col xs={12} md={6} className='seccion-three'>
            <Row><Col><h2 className='p-3 title-two mt-5'>ACERCA DE MÍ 🔥</h2></Col></Row>
            <Row><Col><h4 className='p-3 about-me' id='about-me'>Desarrollador Web FullStack Developer. Formado en habilidades en HTML, CSS, Bootstrap, React, Node.js, y MongoDB. Además, soy competente en el uso de GitHub para la gestión de codigo en distintos proyectos. Mi deber es crear soluciones web atractivas y funcionales. Siempre buscando aportar valor creando soluciones web atractivas y funcionales. Siempre en busca de desafios. Si te interesa, por favor, <a href="https://www.linkedin.com/in/nachocastrodev/" className='text-white'>contrátame</a>. </h4></Col></Row>
          </Col>
        </Row>
      </Container>
      {/* fin seccion 2 */}

      {/* seccion 3 */}
      <Container fluid className='w-100 p-0' id="proyectos">
        <Row className='text-center'>
          <Col className='text-center seccion-five'>
            <Row>
              <Col>
                <h2 className='my-5 mx-5 title-three'>MIS PROYECTOS ⚒️</h2>
              </Col>
            </Row>
            <Projects proyectos={proyectos} />
          </Col>
        </Row>
      </Container>
      {/* fin seccion 3 */}
      {/* seccion 4  */}
      <Container fluid className='w-100 px-0 seccion-six' id="habilidades">
        <Row className='seccion-six'><Col className='text-center'><h2 className='title-four mt-5 mb-5'>HABILIDADES</h2></Col></Row>
        <Row className='text-center seccion-six'>
          <Col fluid xs={12} md={4} className='border-end'>
            <Row><h3 className='habilities'><i className="fa-regular fa-circle-check"></i>¿Que hago?</h3></Row>
            <Row><h5 className='habilities-about'>Creacion de sitios web resposive. Teniendo en cuenta buenas practicas y brindando amplia gama de funcionalidades al cliente.</h5></Row>
          </Col>
          <Col fluid xs={12} md={4} className='border-end'>
            <Row><h3 className='habilities'><i className="fa-brands fa-react"></i>React</h3></Row>
            <Row><h5 className='habilities-about'>Comprendo conceptos basicos de react, como componentes, estados, propiedades,
              usando herramientas como React-js para para ayudar a optimizar el rendmiento de aplicaciones. </h5></Row>
          </Col>
          <Col fluid xs={12} md={4} className=''>
            <Row><h3 className='habilities'><i className="fa-regular fa-thumbs-up"></i>Buenas Practicas</h3></Row>
            <Row><h5 className='habilities-about'>Utilizo React Router para una navegación eficiente y optimizo el rendimiento con técnicas avanzadas, como el renderizado condicional. Mantengo un código organizado y legible aplicando buenas prácticas de codificación."</h5></Row>
          </Col>
        </Row>
      </Container>
      {/* fin seccion 4 */}

      {/* seccion 5 */}
      <Container fluid className='px-0 w-100 text-center'>
        <Row className='seccion-seven p-5' id="contacto">
          <Col>
            <Row><Col><h2 className='my-5 text-white title-five'>Contáctame😉</h2></Col></Row>
            <Row><Col><h4 className='disponible'><i className="fa-solid fa-circle fa-sm"></i>  Actualmente estoy disponible para trabajar</h4></Col></Row>
            <Row><Col><h5 className='contacto-text'>Siempre estoy buscando nuevas oportunidades para ayudarlo a desarrollar su producto.</h5></Col></Row>
            <Row><Col><h5 className='contacto-text'>No dude en ponerse en contacto conmigo. Estoy esperando tu mensaje.</h5></Col></Row>
            <Row>
              <Col className='mt-5'>
                <Button variant='outline-warning' size='lg' href="mailto:nacho_blg@hotmail.com" className='mx-5'><i className="fa-solid fa-envelope"></i> Mail</Button>
                <Button variant='outline-warning' size='lg' href="https://github.com/Nachocastro1"><i className="fa-brands fa-github"></i> GitHub</Button></Col></Row>
          </Col>
        </Row>
      </Container>
      {/* fin seccion 5 */}

      <footer>
        <Container fluid className='px-0 w-100'>
          <Row className='ps-5 footer-bg'>
            <Col md={4} xs={12} className='mt-5'>
              <Row><h3 className='footer-titles'>Navigate</h3></Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="#home">Inicio</Nav.Link>
              </Nav.Item>
              </Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="#about-me">About me</Nav.Link>
              </Nav.Item>
              </Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="#proyectos">Proyectos</Nav.Link>
              </Nav.Item>
              </Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="#habilidades">Habilidades</Nav.Link>
              </Nav.Item>
              </Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
              </Nav.Item>
              </Row>
            </Col>
            <br />
            <Col md={4} xs={12} className='mt-5'>
              <Row><h3 className='footer-titles'>Productos</h3></Row>
              <Row>
                <Nav.Item className='footer-items'>
                  <Nav.Link href="https://pata-sana-web-git-dev-juandurso.vercel.app/home">PataSana Web</Nav.Link>
                </Nav.Item>
              </Row>
            </Col>
            <br />
            <Col md={4} xs={12} className='mt-5'>
              <Row><h3 className='footer-titles'>Social</h3></Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="https://github.com/Nachocastro1"><i className="fa-brands fa-github"></i> GitHub</Nav.Link>
              </Nav.Item></Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="mailto:nacho_blg@hotmail.com"><i className="fa-solid fa-envelope"></i> Email</Nav.Link>
              </Nav.Item></Row>
              <Row><Nav.Item className='footer-items'>
                <Nav.Link href="https://www.instagram.com/nachouuuuuuu/"><i className="fa-brands fa-instagram"></i> Instagram</Nav.Link>
              </Nav.Item></Row>

            </Col>
          </Row>
          <Row className='ps-5 footer-bg text-white'>
            <Col md={12}>
              <hr />
              <p className="text-center">
                © {new Date().getFullYear()} CASTRO, JUAN IGNACIO. TODOS LOS DERECHOS RESERVADOS
              </p>
            </Col>
          </Row>
        </Container>
      </footer>


    </Container>

  );
}

export default Home;




