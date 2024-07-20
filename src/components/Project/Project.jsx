import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Project.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    image: 'path/to/image1.jpg',
    githubLink: 'https://github.com/user/project1',
    liveLink: 'https://project1-live.com'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2.',
    image: 'path/to/image2.jpg',
    githubLink: 'https://github.com/user/project2',
    liveLink: 'https://project2-live.com'
  },
  {
    title: 'Project 3',
    description: 'Description for project 3.',
    image: 'path/to/image3.jpg',
    githubLink: 'https://github.com/user/project3',
    liveLink: 'https://project3-live.com'
  },
  {
    title: 'Project 4',
    description: 'Description for project 4.',
    image: 'path/to/image4.jpg',
    githubLink: 'https://github.com/user/project4',
    liveLink: 'https://project4-live.com'
  },
  {
    title: 'Project 5',
    description: 'Description for project 5.',
    image: 'path/to/image5.jpg',
    githubLink: 'https://github.com/user/project5',
    liveLink: 'https://project5-live.com'
  },
  {
    title: 'Project 6',
    description: 'Description for project 6.',
    image: 'path/to/image6.jpg',
    githubLink: 'https://github.com/user/project6',
    liveLink: 'https://project6-live.com'
  }
];

const ProjectsPage = () => {
  return (
    <Container className="projects-container">
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} alt={`${project.title} thumbnail`} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">GitHub Repo</Button>
                <Button variant="success" href={project.liveLink} target="_blank" className="ms-2">Live App</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
