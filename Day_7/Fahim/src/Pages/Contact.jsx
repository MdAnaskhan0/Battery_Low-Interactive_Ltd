import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">
            We're here to help and answer any questions you might have. Reach out to us!
          </p>
        </Container>
      </div>

      {/* Contact Form Section */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Type your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Details */}
          <Col md={6}>
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, aperiam.</p>
            </p>
            <p>
              <strong>Email:</strong> abidhasanfahim276@.gmail.com
            </p>
            <p>
              <strong>Phone:</strong> (+88) 01913697658
            </p>
            <p>
              <strong>Hours:</strong> Sunday-Tuesday: 9:00 AM - 5:00 PM
            </p>
          </Col>
        </Row>
      </Container>

      {/* Map Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center">Find Us</h2>
          
        </Container>
      </div>
    </div>
  );
};

export default Contact;
