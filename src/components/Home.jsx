// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-4">Empowering Sustainable Futures</h1>
          <p className="lead">Your Partner in ESG Excellence</p>
          <Link to="/about" className="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
