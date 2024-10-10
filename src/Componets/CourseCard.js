import React, { useState } from 'react';

const CourseCardCard = ({ title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '16px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</h2>
      <p style={{ marginTop: '8px' }}>{content}</p>
      <button onClick={handleLearnMore} style={{ marginTop: '16px', backgroundColor: '#1E3A8A', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>Learn More</button>

      {isModalOpen && (
        <div style={{
          position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '500px', textAlign: 'center', position: 'relative'
          }}>
            <span onClick={closeModal} style={{
              position: 'absolute', top: '10px', right: '15px', cursor: 'pointer', fontSize: '24px'
            }}>&times;</span>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>More About {title}</h2>
            <p style={{ fontSize: '16px' }}>
              This course offers an in-depth exploration of {title}. Gain the skills needed to excel in this field, including hands-on projects and expert-led lessons.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCardCard;
