import React from "react";
import './OurServices.css'; // Make sure this CSS file is created and linked

const OurServices = () => {
  return (
    <div className="servicecontainer">
      <h1 className="service-title">Our Services</h1>
      <ul className="custom-bullets">
        <li>Test, Examination & Review of Lifts & Hoist as per Section 28 of Factories Act.</li>
        <li>Test, Examination & Review of Lifting Machines, chains, ropes, lifting tackles etc. as per Section 29 of Factories Act.</li>
        <li>Test, Examination & Review of pressure vessels & pressure plants as per Section 31 of Factories Act.</li>
        <li>Inspection of Welding, Painting and other surface coating</li>
        <li>Third Party Inspection of Welding Electrodes, Vessels, Paints, all types of surface coating and welding consumables.</li>
        <li>UPV test, Rebound hammer test, Core test, Mix Design, Lab test and so on.</li>
        <li>Calibration of Measuring & Monitoring Equipment.</li>
        <li>On-site Quality and Safety Coordination & Surveillance.</li>
        <li>Vendor Assessment Service.</li>
        <li>WPS and PQR of Welding Process.</li>
        <li>Third Party Inspection - Destructive, NDT, Attribute and Variable Inspection.</li>
      </ul>
    </div>
  );
};

export default OurServices;
