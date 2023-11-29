// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Environmental Consulting</h3>
          <p className="service-content">
            We provide expert guidance on environmental sustainability, helping businesses minimize their ecological impact.
          </p>
        </div>
        <div className="service-item">
          <h3>Social Responsibility</h3>
          <p className="service-content">
            Our services include strategies to enhance social responsibility, creating positive impacts on communities.
          </p>
        </div>
        <div className="service-item">
          <h3>Governance Solutions</h3>
          <p className="service-content">
            We offer governance solutions to ensure ethical practices and compliance, fostering trust and transparency.
          </p>
        </div>
        {/* Add more service items as needed */}
      </div>
    </div>
  );
};

export default Services;
