import React, { Component } from 'react';
import FrontEnd from "./frontEnd";
import BackEnd from "./backEnd"
import Cms from "./cms"


class Tabs extends Component {
    render() { 
        return (
            <div id="SkillSet" style={{backgroundColor: "#d3d3d3"}}>
              <h1 style={{fontFamily: "Verdana"}} className="text-center">Skillset</h1>
              <br />
              <nav> 
                <ul className="nav nav-pills justify-content-center" id="nav-tab" role="tablist">
                  <li><a className="nav-item nav-link active" id="nav-front-end-tab" data-toggle="tab" href="#nav-front-end" role="tab" aria-controls="nav-front-end" aria-selected="true">Front-End</a></li>
                  <li><a className="nav-item nav-link" id="nav-back-end-tab" data-toggle="tab" href="#nav-back-end" role="tab" aria-controls="nav-back-end" aria-selected="false">Back-End</a></li>
                  <li><a className="nav-item nav-link" id="nav-cms-tab" data-toggle="tab" href="#nav-cms" role="tab" aria-controls="nav-cms" aria-selected="false">CMS</a></li>
                </ul>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-front-end" role="tabpanel" aria-labelledby="nav-front-end-tab"  style={{backgroundColor: "#d3d3d3"}}><FrontEnd /></div>
                <div className="tab-pane fade" id="nav-back-end" role="tabpanel" aria-labelledby="nav-back-end-tab" style={{backgroundColor: "#d3d3d3"}}><BackEnd /></div>
                <div className="tab-pane fade" id="nav-cms" role="tabpanel" aria-labelledby="nav-cms-tab" style={{backgroundColor: "#d3d3d3"}}><Cms /></div>
              </div>
            </div>
        );
    }
}
 
export default Tabs;