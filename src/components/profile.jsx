import React from 'react';
import "../css/profile.css"
import Typical from 'react-typical'
import gautam from "../utils/gautam.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faGithubSquare, faLinkedin, faDev} from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        
        <div>
             <input id="slider" className="customSlider" type="checkbox" />
            <label for="slider"></label>
            <div className="wrapper">
                <div className="profile">
                    <img src={gautam} className="thumbnail" alt="Gautam Ghai" />
                    <h3 className="name">Gautam Ghai</h3>
                    <p className="title">Javascript Developer</p>
                    <p className="description">I'm a <Typical
                        steps={[
                            "Developer", 1000,
                            "Student", 1000,
                            "Writer", 1000,
                            "Gamer", 1000,
                            "Footballer", 1000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                        />
                    </p>
                    <a href="mailto:gautamghai99@gmail.com" style={{textDecoration: "none"}}><button type="button" className="btn">Hire Me</button></a>
                </div>
                <div className="social-icons">
                    <div className="icon">
                        <a href="https://dev.to/gautamghai"><FontAwesomeIcon icon={faDev}/></a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/gautam-ghai"><FontAwesomeIcon icon={faGithubSquare}/></a>
                    </div>
                    <div className="icon">
                        <a href="https://linkedin.com/in/gautam-ghai"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/_gautamghai"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;