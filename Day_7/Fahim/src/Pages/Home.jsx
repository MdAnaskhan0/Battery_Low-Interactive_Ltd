import React from 'react';
import { Container, Row, Col, Card, Button, Fade } from 'react-bootstrap';
import Fahim from '../assets/Fahim.jpg';
// import Portfolio from '../assets/Portfolio.jpg';
// import Ecom from '../assets/Ecom.jpg';
// import Blog from '../assets/Blog.jpg';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">Hello, Abid HAsan Fahim</h1>
          <p className="lead">
            A passionate Web Developer specializing in creating modern and responsive websites.
          </p>
          <Button variant="primary" size="lg" href="#projects">
            View My Work
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I am a web developer with 5+ years of experience crafting beautiful and functional websites.
              My expertise lies in front-end development, but I also have experience with back-end technologies.
              I thrive on turning ideas into reality with clean and efficient code.
            </p>
            <Button variant="outline-primary" href="/contact">
              Get in Touch
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={Fahim}
              alt="About Me"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Skills Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Skills</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="shadow-sm p-3">
              <Card.Title>HTML & CSS</Card.Title>
              <Card.Text>Expert in creating semantic, accessible, and responsive layouts.</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm p-3">
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>Proficient in modern ES6+ syntax, frameworks, and libraries like React.js.</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm p-3">
              <Card.Title>Back-End</Card.Title>
              <Card.Text>Experience with Node.js, Express, and database integration (MongoDB, SQL).</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="my-5" id="projects">
        <h2 className="text-center mb-4">Projects</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={Fahim}
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>
                  A personal portfolio website showcasing my work and skills.
                </Card.Text>
                <Button variant="primary" href="/project1">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={Fahim}
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>E-Commerce App</Card.Title>
                <Card.Text>
                  A full-stack e-commerce application with advanced functionality.
                </Card.Text>
                <Button variant="primary" href="/project2">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={Fahim}
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>Blog Platform</Card.Title>
                <Card.Text>
                  A blog platform with rich text editing and user authentication.
                </Card.Text>
                <Button variant="primary" href="/project3">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h2>Let's Build Something Amazing Together</h2>
          <Button variant="light" size="lg" href="/contact">
            Contact Me
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
