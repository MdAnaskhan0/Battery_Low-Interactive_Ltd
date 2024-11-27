import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavigationBar from './Components/NavigationBar';
import Service from './Pages/Service';


const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
