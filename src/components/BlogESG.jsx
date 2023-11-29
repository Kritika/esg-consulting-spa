// BlogESG.js
import React, { useState } from 'react';
import './BlogESG.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BlogESG = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="blog-esg">
      <h2>Understanding ESG: A Key Driver for Sustainable Business</h2>
      <p>
        Environmental, Social, and Governance (ESG) criteria are becoming integral for businesses striving
        towards sustainability. In this blog, we explore the importance of ESG and how companies can leverage
        these principles to drive positive change.
      </p>
      {readMore ? (
        <div>
          <p>
            <strong>Key Takeaways:</strong>
          </p>
          <ul>
            <li>Explanation of ESG and its significance</li>
            <li>Case studies on successful ESG integration</li>
            <li>Practical tips for implementing ESG practices</li>
          </ul>
          <p>
            Dive deeper into the world of ESG and discover actionable insights for your business.
            <Link to="/blog-understanding-esg"> Click here to know more! </Link>
          </p>
        </div>
      ) : null}
      <button className="read-more-button" onClick={toggleReadMore}>
        {readMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default BlogESG;
