import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi! I am
                    <span> Kevin Wu</span>
                </h1>
                <p className="home-subtext">
                    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                </p> 
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Google Ads"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
                <div className="icons">
                    <Link className="icon-holder">
                        <FaFilePdf className="icon resume" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>        
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon li"/>        
                    </Link>
                    
                </div>
            </header>
        </div>
    )
}

export default HomePage;
