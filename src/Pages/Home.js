import React from 'react';
import CourseCard from "../Componets/CourseCard";

const Home = () => {
  return (
    <div>
      <CourseCard 
        title="Full Stack Development" 
        content="Learn full stack development and become proficient in both front-end and back-end technologies." 
      />
      <CourseCard
        title="AI & Machine Learning" 
        content="Master AI and machine learning fundamentals to build intelligent systems and solutions." 
      />
      <CourseCard
        title="Data Science & Analytics" 
        content="Develop data science skills to analyze, visualize, and make data-driven decisions." 
      />
    </div>
  );
}

export default Home;