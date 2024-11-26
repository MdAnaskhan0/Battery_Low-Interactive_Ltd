import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="py-5" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Build responsive and modern websites tailored to your needs.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>UI/UX Design</Card.Title>
              <Card.Text>
                Design engaging and intuitive interfaces for your users.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>SEO Optimization</Card.Title>
              <Card.Text>
                Improve your site's visibility and ranking on search engines.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
