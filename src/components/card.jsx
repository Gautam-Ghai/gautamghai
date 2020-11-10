import React, { Component } from 'react';
import "../css/card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faGithubSquare, faLinkedin, faDev} from '@fortawesome/free-brands-svg-icons';
import gautam from "../images/gautam.jpg";

class Card extends Component {
    state = {
        width: window.innerWidth,
    }
    
    handleResize = (e) => {
        this.setState({ width: window.innerWidth })
       };
      
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
       }
      
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
       }
    render() {
        var class1="col-sm px-0";
        var class2="col-sm";
            if(this.state.width <= 820) {
                class1 = " mx-auto px-0";
                class2 = "text-center w-100";
            }
        return ( 
            <div className="card flex-row flex-wrap">
                <div className={class1}>
                    <img src={gautam} alt="Gautam Ghai" height="300" width="225"/>
                </div>
                <div className={class2}>
                    <div className="card-body">
                        <h5 className="card-header border-0 w-100">Hello, I'm Gautam</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer border-0 w-100">
                        <a href="https://dev.to/gautamghai" className="btn"><FontAwesomeIcon icon={faDev}/></a>
                        <a href="https://github.com/gautam-ghai" className="btn"><FontAwesomeIcon icon={faGithubSquare}/></a>
                        <a href="https://linkedin.com/in/gautam-ghai" className="btn"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://twitter.com/_gautamghai" className="btn"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>                   
                </div>
            </div>            
        );
    }
}
 
export default Card;