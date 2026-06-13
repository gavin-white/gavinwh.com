import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <>
      <div className="resume-page">
          <iframe
            src="https://resume.gavinwh.com/resume.pdf"
            allow="autoplay"
            className="resume-frame"
            title="Gavin White's Resume"
          ></iframe>
       </div>
    </>
  );
};

export default Resume;
