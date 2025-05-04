import React from 'react';
import './Associates.css';
function Associates ()  {
  return (
    <div className="main-page">
      <div className="banner">
        <div className="overlay">
          <h1>Aakaai Engineers & Associates</h1>
        </div>
      </div>
      <section className="introduction-section">
        <div className="introduction-grid">
          <div className="introduction-images">
            <img src="/images/associate2.jpg" alt="Work 1" />
          </div>
          <div className="introduction-text">
            <h2>Introduction :</h2>
            <p>
              AAKAAI ENGINEERS & ASSOCIATES is an ISO 9001 (QMS) Certified co. and the leading and most reliable company for
              Fabrication, erection, repair, surface coating & painting of mechanical structures, Waterproofing, grouting,
              strengthening & repair of civil structure, Manufacturing and operational contract of Engineering objects, AND
              Supply, Installation & Servicing of Solar Panels, Solar Heaters, Solar Lamps and all solar operated devices
              in various field of Engineering. Our Mission is to provide Quality at the highest level and lead our service
              field with the advanced technologies and applications.
            </p>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <h2>Our Services</h2>
        <div className="bottom-content">
          <ul className="bottom-list">
          <li>REBARING</li>
  <li>ANCHOR BOLT FIXING</li>
  <li>FABRICATION AND ERECTION OF MECHANICAL STRUCTURES. </li>
  <li>SURFACE COATING, PAINTING OF MECHANICAL STRUCTURES. </li>
  <li>WATER PROOFING AND GROUTING OF CIVIL STRUCTURES. </li>
  <li>ROOF HEAT REFECTIVE COATING </li>
  <li>STRENGTHENING, REPAIRE OF MECHANICAL & CIVIL STRUCTURES. </li>
  <li>MANUFATURING AND OPERATIONAL CONTRACT. </li>
  <li>SUPPLY, INSTALLATION & SERVICING OF SOLAR PANELS, SOLAR HEATERS, SOLAR
  LAMPS AND ALL SOLAR OPERATED DEVICES.</li>
  <li>CORE CUTTING  </li>
  <li>DISMANTALING OF CONCRETE STRUCTURES  </li>
          </ul>
          <img src="/images/associate3.jpg" alt="Service Work" className="bottom-image" />
        </div>
      </section>
    </div>
  );
};
export default Associates;