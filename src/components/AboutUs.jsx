// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="landing-page container-fluid">
      <div className="row text-and-image">
        <div className="main-text">
          <div className="main-text-positioner">
            <div className="title-container">
              <h1>About Prakriti</h1>
              <h2>We champion ESG and Sustainability</h2>
            </div>
          </div>
        </div>

      </div>
      <div className="content-area">
        <section className="wysiwyg main-content">
          <p>
            <strong>At Prakriti, we are dedicated to shaping a sustainable and resilient future through Environmental, Social, and Governance (ESG) consulting.</strong>
          </p>
          <p>
            ESG has emerged as a critical framework for organizations aiming to integrate sustainability into their core business strategies. We recognize the profound impact that ESG factors have on shaping the future of businesses, economies, and societies. Our mission is to guide organizations in navigating the complexities of ESG, unlocking opportunities for growth, and fostering positive environmental and social change.
          </p>
          <p>
            <strong>Why ESG Matters:</strong>
          </p>
          <p>
            ESG considerations go beyond regulatory compliance; they represent a commitment to responsible business practices. By addressing environmental impact, social responsibility, and governance practices, organizations can enhance their resilience, build stakeholder trust, and contribute to a more sustainable global ecosystem.
          </p>
          <p>
            <strong>Our Approach:</strong>
          </p>
          <p>
            Prakriti takes a holistic approach to ESG consulting. We collaborate closely with our clients to understand their unique challenges, industry dynamics, and sustainability goals. Our team of experts brings a wealth of knowledge in ESG strategy, risk management, and implementation. We work with organizations to set meaningful ESG targets, measure progress transparently, and implement initiatives that drive positive change.
          </p>
          <p>
            <strong>Key Focus Areas:</strong>
          </p>
          <ul>
            <li>Environmental Impact: Helping organizations measure, reduce, and offset their environmental footprint.</li>
            <li>Social Responsibility: Advising on initiatives that enhance social impact, diversity, equity, and community engagement.</li>
            <li>Governance Excellence: Assisting in strengthening governance frameworks, ethical practices, and transparency.</li>
          </ul>
          <p>
            <strong>Our Commitment:</strong>
          </p>
          <p>
            Prakriti is more than a consulting firm; we are catalysts for positive change. We are committed to empowering organizations to be leaders in sustainable business practices. Through collaboration, innovation, and a deep understanding of the evolving ESG landscape, we guide our clients towards a future where economic success aligns seamlessly with social and environmental responsibility.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
