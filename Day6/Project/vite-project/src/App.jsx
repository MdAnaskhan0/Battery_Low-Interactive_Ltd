import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from './Components/HeaderNav';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <HeaderNav />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Form */}
      <Container className="py-5" id="contact">
        <h2 className="text-center mb-4">Contact Us</h2>
        <ContactForm />
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
