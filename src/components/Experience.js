import React from 'react';
import './Experience.css';

const WorkExperience = () => {
  return (
    <section id="experience" className="experience">
    <div className="work-experience-page">
      <h1 className="work-title">Work Experience</h1>
      <div className="experience-container">
        <div className="experience-block">
        <div className="amazon-logo">
            <img src='amazon1.png' alt="Amazon" />
          </div>
          <div className="experience-details">
          <span>
          <h2>Company : Amazon</h2>
          <h3>Role : Data Engineer</h3>
          </span>
            
            <p>
              I worked on ETL processes, adding new tables, updating schemas of existing tables, and flattening complex JSON data
              to ensure seamless data integration and processing.
            </p>
            <p>
              Through these projects, I learned techniques in PySpark, SQL, and various AWS services such as S3, Redshift, and some
              internal tools, enhancing my ability to handle large-scale data operations.
            </p>
            <p>
              I successfully acquired new skills through these experiences.
              </p>
            <p>

              You can view my <a href="https://drive.google.com/file/d/1blNH3V7rm7RFy96uDMYk4iKhYim53SER/view?usp=sharing" target="_blank" rel="noopener noreferrer">certificate</a>.
            </p>
          </div>
         
        </div>
      </div>
    </div>
    </section>
  );
};

export default WorkExperience;
