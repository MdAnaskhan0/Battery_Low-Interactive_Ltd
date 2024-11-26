import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="bg-light text-center py-5" id="home">
      <Container>
        <h1>Welcome to Our Website</h1>
        <p className="lead">Your one-stop solution for web design and development</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
