// ContactUs.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './ContactUs.css';

const ContactUs = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', data);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input {...register('name', { required: 'Name is required' })} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea {...register('message', { required: 'Message is required' })} />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
