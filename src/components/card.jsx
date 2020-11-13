import React, { Component } from 'react';
import "../css/card.scss"
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
        var class3=""
        var hite = "290px"
        var wide = "220px"
            if(this.state.width <= 920  ) {
                class1 = "mx-auto px-0";
                class2 = "text-center w-100";
                class3 = "rounded-circle"
                hite = "150px"
                wide = "150px"
            }
        return ( 
            <div className="card flex-row flex-wrap">
                <div className={class1}>
                    <img className={class3} src={gautam} alt="Gautam Ghai" height={hite} width={wide}/>
                </div>
                <div className={class2}>
                    <div className="card-body">
                        <h5 className="card-header border-0 w-100">Hi, I'm Gautam</h5>
                        <p className="card-text text-center">
                            21 year old<br />Web Developer<br />JavaScript Fanatic <br /> FM addict<br />(He/Him)
                        </p>
                        <a href="#" class="btn btn-dark mg-auto">About </a>
                        <a href="#" class="btn btn-dark mg-auto">Contact </a>
                    </div>                  
                </div>
            </div>            
        );
    }
}
 
export default Card;