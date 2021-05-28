import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="/" />
            </div>
            <div className="about-info">
                <h4> I am<span> Kevin Wu</span>
                </h4>
                <p className="about-me">
                    Currently a penultimate student completing BSc in Computer Science/Science majoring in Statistics at the UNSW.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Kevin Wu</p>
                        <p>: 20</p>
                        <p>: Australian</p>
                        <p>: English, Chinese (Mandarin), Korean</p>
                        <p>: Hurstville, Sydney NSW</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;
