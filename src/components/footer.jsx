import React, { Component } from 'react';
import "../css/footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faGithubSquare, faLinkedin, faDev} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer">
                <div className="btn-group btn-group-toggle">
                <a href="https://dev.to/gautamghai" className="btn btn-dark  btn-lg"><FontAwesomeIcon icon={faDev}/></a>
                <a href="https://github.com/gautam-ghai" className="btn btn-dark btn-lg"><FontAwesomeIcon icon={faGithubSquare}/></a>
                <a href="https://linkedin.com/in/gautam-ghai" className="btn btn-dark btn-lg"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://twitter.com/_gautamghai" className="btn btn-dark btn-lg"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                </div>
            </footer>
        );
    }
}
 
export default Footer;