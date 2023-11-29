// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Blogs from './components/Blogs';
import BlogESGFullContent from './components/BlogESGFullContent';
import BlogServicesFullContent from './components/BlogServicesFullContent';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog-understanding-esg"  element={<BlogESGFullContent/>} />
        <Route path="/blog-transformative-services"  element={<BlogServicesFullContent/>} />
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
