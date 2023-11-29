// Blogs.js
import React from 'react';
import BlogESG from './BlogESG';
import BlogServices from './BlogServices';
import './Blogs.css'; // Import your blog styling here

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>Latest Blogs</h1>
      <div className="blog">
        <BlogESG />
      </div>
      <div className="blog">
        <BlogServices />
      </div>
    </div>
  );
};

export default Blogs;
