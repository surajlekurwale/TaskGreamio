import React, { useState } from 'react';
import Footer from '../Componets/Footer';

const CourseDetails = () => {
 
  const [isEnrolled, setIsEnrolled] = useState(false);

 
  const handleEnrollClick = () => {
    setIsEnrolled(true);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E3A8A' }}>Comprehensive Full Stack Development Course</h1>
      <p style={{ marginTop: '16px', fontSize: '18px' }}>
        This full-stack development course covers essential web technologies, including HTML, CSS, JavaScript, and React, as well as backend development with Node.js, Express, and databases.
      </p>

     
      <section style={{ marginTop: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Course Syllabus</h2>
        <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
          <li style={{ marginTop: '8px' }}>Module 1: HTML & CSS Basics</li>
          <li style={{ marginTop: '8px' }}>Module 2: JavaScript Fundamentals</li>
          <li style={{ marginTop: '8px' }}>Module 3: Advanced React & Redux</li>
          <li style={{ marginTop: '8px' }}>Module 4: Backend Development with Node.js</li>
          <li style={{ marginTop: '8px' }}>Module 5: Databases with MongoDB</li>
        </ul>
      </section>

   
      <section style={{ marginTop: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Instructor</h2>
        <p style={{ marginTop: '12px' }}>
          <strong>John Doe</strong> is a seasoned full-stack developer with over 10 years of experience in web development. John has worked on various projects and has a passion for teaching the latest web technologies.
        </p>
      </section>

   
      <section style={{ marginTop: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>FAQs</h2>
        <div style={{ marginTop: '12px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600' }}>What prior knowledge is required?</h3>
          <p>No prior knowledge is needed. This course is suitable for beginners.</p>
        </div>
        <div style={{ marginTop: '12px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600' }}>How long is the course?</h3>
          <p>The course is self-paced and can be completed in 3-6 months with a few hours of study each week.</p>
        </div>
      </section>

    
      <section style={{ marginTop: '32px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A' }}>Enroll Now</h2>
        <p style={{ marginTop: '12px' }}>
          Start your journey today! Click the button below to enroll and gain access to all course materials.
        </p>
        <button 
          onClick={handleEnrollClick} 
          style={{ 
            marginTop: '16px', 
            backgroundColor: '#1E3A8A', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            cursor: 'pointer' 
          }}
        >
          Enroll Now
        </button>

        {isEnrolled && (
          <div style={{ marginTop: '20px', backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#00796b' }}>Welcome to the Course!</h3>
            <p style={{ marginTop: '12px' }}>You have successfully enrolled. We’re excited to have you on board! Check your email for access to the course materials and next steps.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
