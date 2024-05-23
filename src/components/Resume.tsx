import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <>
      <div className="resume-page">
      <iframe 
        src="https://drive.google.com/file/d/1-ON6mAPsBUT1irA_MfyMduWwcyq2qyAl/preview" 
        allow="autoplay" 
        className="resume-frame"
        title="Gavin White's Resume"
      ></iframe>
       </div>
    </>
  );
};

export default Resume;
