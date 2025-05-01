import React from "react";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Aakaai Group</h1>
      <div className="about-us-content">
        <p className="about-us-text">
          AAKAAI is the leading and most reliable company for QHSE inspection & testing, 
          technical services, training, and calibration in various fields of Engineering, 
          Power, Refinery, Construction, Institution, Fabrication, Industrial, and Domestic. 
          Our mission is to provide quality at the highest level and lead our service field 
          with advanced technologies and applications in Quality, Safety, Environment, and Engineering.
        </p>
        <p className="about-us-text">
          AAKAAI Inspection and Testing offer periodic ongoing monitoring, testing, and services 
          to ensure reliability, efficiency, and a safe working life of plants, machinery, and 
          equipment by providing Audits, Training, Safe Load Tests, Calibration, Inspection, 
          Verification, Third-Party Inspection, and Destructive & Non-Destructive Tests. 
          Our main objective lies in providing value-based services while maintaining the 
          highest standards of professionalism and business integrity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;