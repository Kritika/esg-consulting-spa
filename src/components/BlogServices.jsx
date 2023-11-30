// BlogServices.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BlogServices.css';

const BlogServices = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="blog-services">
      <h2>Transformative Services for Sustainable Business Growth</h2>
      <p>
        Discover how strategic services can propel your business towards sustainability. This blog explores
        the range of services available to support organizations in setting and achieving their sustainability goals.
      </p>
      {readMore ? (
        <div>
          <p>
            <strong>Highlighted Services:</strong>
          </p>
          <ul>
            <li>Environmental Impact Assessments</li>
            <li>Social Responsibility Programs</li>
            <li>Governance and Compliance Consultation</li>
          </ul>
          <p>
            Learn how these services contribute to environmental stewardship, social impact, and governance excellence.
            <Link to="/prakriti/blog-transformative-services"> Click here to know more! </Link>

          </p>
        </div>
      ) : null}
      <button className="read-more-button" onClick={toggleReadMore}>
        {readMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default BlogServices;
