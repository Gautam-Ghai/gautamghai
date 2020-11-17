import React from 'react';
import "../css/header.scss"
import { Link } from "react-scroll";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  >
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  >
                    About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="SkillSet"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="WorkExp"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  >
                  Work Experience
                </Link>
                
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  >
                  Resume
                </Link>
                
              </li>
            </ul>
          </div>
        </nav>
        
    );
}
 
export default Header;