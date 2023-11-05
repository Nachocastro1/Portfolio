// projects.jsx
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Projects = ({ proyectos }) => (
  <Row className='d-flex justify-content-center text-center'>
    {proyectos.map((proyecto) => (
      <Col key={proyecto.id} md={6} className='my-5 mx-5 d-flex justify-content-center'>
        <Card className="border border-warning border-4 rounded-3" style={{ width: '40rem' }}>
          <Card.Img variant="top" src={proyecto.imageSrc} />
          <Card.Body className='custom-card'>
            <Card.Title>{proyecto.title}</Card.Title>
            <Card.Text>{proyecto.description}</Card.Text>
            <Card.Text>{proyecto.readme}</Card.Text>
            <Button variant="warning" href={proyecto.url} target="_blank" rel="noreferrer">
              Visitar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Projects;
