import React from 'react';
import Geolocation from "../utils/Geolocation.png"
import ColorModel from "../utils/ColorModel.png"
import "../css/projects.css"


const Projects = () => {
    return (  
		<div className="projects">
		<h1 style={{fontFamily: "Verdana", color: "#1B2735"}} className="text-center">Projects</h1>
        <div className="container">
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div class="flip-container text-center" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
		                    <div class="front">
			                    <img src={ColorModel} className="img-project" alt="ColorModel"/>
		                    </div>
		                    <div class="back">
                                <h1>Color Model</h1>
                                <p>Developed this website using HTML, CSS, & JavaScript and deployed on github pages.</p>
                                <p>Github Repo: <a href="https://github.com/Gautam-Ghai/Color-Model">https://github.com/Gautam-Ghai/Color-Model</a></p>
                                <p>Link: <a href="https://gisgenius.github.io">https://gisgenius.github.io</a></p>
		                    </div>
	                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="flip-container text-center" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
		                    <div class="front">
			                    <img src={Geolocation} className="img-project" alt="Geolocation"/>
		                    </div>
		                    <div class="back">
                                <h1>Geolocation</h1>
                                <p>Developed this website using HTML, CSS, JavaScript, & Google API and deployed on github pages.</p>
                                <p>Github Repo: <a href="https://github.com/Gautam-Ghai/Geolocation">https://github.com/Gautam-Ghai/Geolocation</a></p>
                                <p>Link: <a href="https://gaitan1539.github.io">https://gaitan1539.github.io</a></p>
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
		</div>
    );
}
 
export default Projects;