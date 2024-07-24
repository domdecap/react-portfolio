import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Project.css';

const projects = [
  {
    title: 'Story Routlette',
    description: 'Bootstrap, Handlebars, Express.js',
    image: '../../../src/assets/images/my_headshot.jpeg',
    githubLink: 'https://github.com/deepblueseas/Story-Roulette',
    liveLink: 'https://project1-live.com'
  },
  {
    title: 'Movie Night',
    description: 'HTML, CSS, Bootstrap, JS. TMDB API',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/tawatson02/movie-night',
    liveLink: 'https://tawatson02.github.io/movie-night/'
  },
  {
    title: 'Weather Dashboard',
    description: 'Bootstrap, JS, OpenWeather API',
    image: 'path/to/image3.jpg',
    githubLink: 'https://github.com/domdecap/weather-dashboard',
    liveLink: 'https://domdecap.github.io/weather-dashboard/'
  },
  {
    title: 'Just Another Text Editor',
    description: 'JS, Express.js, Node.js',
    image: 'path/to/image4.jpg',
    githubLink: 'https://github.com/domdecap/just-another-text-editor',
    liveLink: 'https://just-another-text-editor-54n0.onrender.com'
  },
  {
    title: 'README Generator',
    description: 'JS, Node.JS',
    image: 'path/to/image5.jpg',
    githubLink: 'https://github.com/domdecap/README-generator',
    liveLink: 'https://github.com/domdecap/README-generator'
  },
  {
    title: 'Portfolio',
    description: 'HTML, CSS, React.js',
    image: 'path/to/image6.jpg',
    githubLink: 'https://github.com/domdecap/react-portfolio',
    liveLink: 'https://project6-live.com'
  }
];

const ProjectsPage = () => {
  return (
    <Container className="projects-container">
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className='project-card'>
              {/* <Card.Img variant="top" src={project.image} alt={`${project.title} thumbnail`} /> */}
              <Card.Body>
                <Card.Title className="project-title">{project.title}</Card.Title>
                <Card.Text className="project-description">{project.description}</Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank" className="github-projects-button">GitHub Repo</Button>
                <Button variant="success" href={project.liveLink} target="_blank" className="live-button ms-2">Live App</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
