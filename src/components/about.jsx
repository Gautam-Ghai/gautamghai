import React from 'react';
import "../css/about.scss"

const About = () => {
    return (
        <div className="division" id="About">
            <h1 style={{fontFamily: "Verdana"}} className="text-center">About</h1>
            <div className="container">
                <div className="row">
                    <div className="col-6" style={{borderRight: "1px solid"}}>
                        <p>Hi, I am Gautam Ghai. I am a web developer who likes to work with JavaScript. I am pursuing my Bachelors of Computer Information Systems from University of the Fraser Valley, Abbotsford, BC, Canada.</p>
                        <p>Apart from this, I love to watch football and talk about it all day. I am also a Football Manager addict which means if I start playing once, I won't stop for the next 2-3 hours. Other than that, I also like to read and write.</p>
                    </div>
                    
                    <div className="col-6">
                        <p></p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}
 
export default About;