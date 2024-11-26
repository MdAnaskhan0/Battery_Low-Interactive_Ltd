import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Sample Website. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav>
              <Nav.Link href="#privacy" className="text-white">Privacy Policy</Nav.Link>
              <Nav.Link href="#terms" className="text-white">Terms of Service</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
