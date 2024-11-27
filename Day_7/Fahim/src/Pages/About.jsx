import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Learn more about our mission, vision, and the team that makes it all possible.
          </p>
        </Container>
      </div>

      {/* Mission & Vision Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Our Mission"
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide innovative, reliable, and scalable solutions
              that empower businesses and individuals to achieve their full potential.
            </p>
            <h2>Our Vision</h2>
            <p>
              We envision a world where technology drives growth, fosters creativity,
              and connects people in meaningful ways.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  alt="Team Member 1"
                  className="mb-3"
                />
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>CEO & Founder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  alt="Team Member 2"
                  className="mb-3"
                />
                <Card.Title>John Smith</Card.Title>
                <Card.Text>Chief Technology Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  alt="Team Member 3"
                  className="mb-3"
                />
                <Card.Title>Emily Johnson</Card.Title>
                <Card.Text>Head of Marketing</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h2>Want to Join Our Journey?</h2>
          <p>Be part of our story and contribute to building a brighter future.</p>
          <a href="/contact" className="btn btn-light btn-lg">
            Contact Us
          </a>
        </Container>
      </div>
    </div>
  );
};

export default About;
