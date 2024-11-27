import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Service = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Our Services</h1>
          <p className="lead">
            We offer a wide range of services tailored to meet your needs.
          </p>
        </Container>
      </div>

      {/* Services Overview Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <p className="text-center">
          Whether you're looking for cutting-edge technology solutions, expert consulting, or innovative strategies, we've got you covered. Explore our wide range of services below.
        </p>
      </Container>

      {/* Service Cards Section */}
      <Container className="mb-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 1"
              />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Build robust, scalable, and user-friendly websites tailored to your business needs.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 2"
              />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                  Create intuitive and high-performing mobile apps for Android and iOS platforms.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 3"
              />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Drive growth and engagement with our expert SEO, social media, and PPC services.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="g-4 mt-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 4"
              />
              <Card.Body>
                <Card.Title>Cloud Solutions</Card.Title>
                <Card.Text>
                  Transform your business with scalable and secure cloud-based services.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 5"
              />
              <Card.Body>
                <Card.Title>IT Consulting</Card.Title>
                <Card.Text>
                  Leverage our expertise to solve complex IT challenges and optimize operations.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Service 6"
              />
              <Card.Body>
                <Card.Title>eCommerce Solutions</Card.Title>
                <Card.Text>
                  Launch and scale your online store with our powerful eCommerce platforms.
                </Card.Text>
                <Button variant="primary" href="/contact">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss how we can help your business thrive.</p>
          <Button variant="light" size="lg" href="/contact">
            Contact Us
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Service;
