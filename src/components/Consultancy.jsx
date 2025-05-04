import React from 'react';
import './Consultancy.css';
function Consultancy () {
    return (
        <div className="consultancy">
            <div className="consultancy-banner">
                <div className="overlay">
                    <h1>AAKAAI Integrated Management Consultancy And Training Academy</h1>
                </div>
            </div>
            <section className="introduction">
                <div className="intro-container">
                    <div className='intro-images'>
                        <img src='/images/consultancy2.jpg' alt='consult 1' />
                    </div>
                    <div className="intro-text">
                        <h2>Introduction</h2>
                        <p>
                            AAKAAI INTEGRATED MANAGEMENT CONSULTANCY & TRAINING ACADEMY is a consultancy co for ISO
                            certification and training, also the leading and most reliable company for audits,
                            coordination, and documentation in various fields of HSEQ (Health, Safety, Quality &
                            Environment). Our Mission is to provide effectiveness at the highest level and lead
                            our service field with advanced technologies and applications.
                        </p>
                    </div>
                </div>
            </section>
            <section className="services">
                <h2>Our Services</h2>
                <ul className="service-line">
                    <li>Consultancy and audit of ISO 9001, ISO 14001, OHSAS 18001 (Now ISO 45001), HACCP, GMP, CE marking.</li>
                    <li>Training on Quality, Safety, Environment, Psychology, NDT, Welding, and Heat treatment for Manufacturing, Fabrication, Construction, Infrastructure Projects and Technical Institutions.</li>
                    <li>On site Quality and Safety Co-ordination & Surveillance.</li>
                    <li>Hazards Identification Study (HAZID), Hazard & Operability Study (HAZOP), Quantified Risk assessment (QRA), Risk based Inspection (RBI)</li>
                    <li>Environment Impact & Aspects (EIA), Environmental management program.</li>
                    <li>Consultancy in fire detection and control system</li>
                    <li>strengthening, repair of Mechanical and Civil structures</li>
                    <li>Manufacturing and operational contract</li>
                </ul>
                <div className="service-images">
                    <img src='/images/consultancy3.jpg' alt='image 1' />
                    <img src="/images/consultancy4.jpg" alt="image 2" />
                </div>
            </section>
        </div>
    );
};
export default Consultancy;