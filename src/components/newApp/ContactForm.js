import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    hiring: false,
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/contact', {  // Change this to the correct backend URL when deployed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      // On successful submission, set isSubmitted to true
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className = 'contact-modal'>
      {/* Conditionally render either the form or the success message */}
      {isSubmitted ? (
        <p>Contact information Submitted.</p>  // Success message
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="company" placeholder="Company" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="position" placeholder="Position" onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
          </div>
          <div className="form-group form-checkbox">
           <input type="checkbox" id="hiring-checkbox" name="hiring" onChange={handleChange} />
            <label htmlFor="hiring-checkbox">Are You Hiring?</label>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;