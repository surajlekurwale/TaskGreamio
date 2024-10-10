import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.course) newErrors.course = "Course selection is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted: ", formData);
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '40px 20px',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#FAFAFA',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '28px',
        marginBottom: '24px',
        textAlign: 'center',
        color: '#1A202C'
      }}>
        Register for Our Full Stack Development Course
      </h1>
      <p style={{
        textAlign: 'center',
        color: '#4A5568',
        marginBottom: '32px',
        fontSize: '16px'
      }}>
        Enhance your career prospects with in-demand skills. Register now and start your journey towards becoming a Full Stack Developer!
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '8px', color: '#2D3748' }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Full Name"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: errors.name ? '1px solid #E53E3E' : '1px solid #CBD5E0',
              fontSize: '16px',
              color: '#2D3748'
            }}
          />
          {errors.name && <p style={{ color: '#E53E3E', fontSize: '14px', marginTop: '8px' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '8px', color: '#2D3748' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email Address"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: errors.email ? '1px solid #E53E3E' : '1px solid #CBD5E0',
              fontSize: '16px',
              color: '#2D3748'
            }}
          />
          {errors.email && <p style={{ color: '#E53E3E', fontSize: '14px', marginTop: '8px' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '8px', color: '#2D3748' }}>Course Selection</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: errors.course ? '1px solid #E53E3E' : '1px solid #CBD5E0',
              fontSize: '16px',
              color: '#2D3748',
              backgroundColor: 'white'
            }}
          >
            <option value="">Select a course</option>
            <option value="HTML & CSS Basics">HTML & CSS Basics</option>
            <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
            <option value="React & Redux">React & Redux</option>
            <option value="Node.js & Express">Node.js & Express</option>
          </select>
          {errors.course && <p style={{ color: '#E53E3E', fontSize: '14px', marginTop: '8px' }}>{errors.course}</p>}
        </div>

        <button type="submit" style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#3182CE',
          color: 'white',
          borderRadius: '6px',
          fontSize: '18px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2B6CB0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3182CE'}
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Contact;
