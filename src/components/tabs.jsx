import React, { Component } from 'react';
import FrontEnd from "./frontEnd";
import BackEnd from "./backEnd"
import Cms from "./cms"
import "../css/tabs.scss"


class Tabs extends Component {
    render() { 
        return (
            <div id="SkillSet" style={{backgroundColor: "#ffffff", color: "black", paddingTop: "2.5rem"}}>
              <h1 className="pageTitle text-center">Skillset</h1>
              <br />
                <ul className="nav nav-pills justify-content-center">
                  <li className="nav-item pill-1"><a className="nav-link active" data-toggle="tab" href="#nav-front-end">Front-End</a></li>
                  <li className="nav-item pill-2"><a className="nav-link" data-toggle="tab" href="#nav-back-end">Back-End</a></li>
                  <li className="nav-item pill-3"><a className="nav-link" data-toggle="tab" href="#nav-cms">CMS</a></li>
                </ul>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-front-end" role="tabpanel" style={{backgroundColor: "#ffffff"}}><FrontEnd /></div>
                <div className="tab-pane fade" id="nav-back-end" role="tabpanel" style={{backgroundColor: "#ffffff"}}><BackEnd /></div>
                <div className="tab-pane fade" id="nav-cms" role="tabpanel" style={{backgroundColor: "#ffffff"}}><Cms /></div>
              </div>
            </div>
        );
    }
}
 
export default Tabs;