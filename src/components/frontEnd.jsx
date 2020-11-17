import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const FrontEnd = () => {
    return (  
        <div className="container">
            <br />
        <div className="row">
            <div className="col-2"><p>HTML </p></div>
            <div className="col"><ProgressBar completed={90} width="100%"/></div>
        </div>
        <div className="row">
            <div className="col-2"><p>CSS </p></div>
            <div className="col"><ProgressBar completed={75} width="100%"/></div>
        </div>
        <div className="row">
            <div className="col-2"><p>JavaScript </p></div>
            <div className="col"><ProgressBar completed={60} width="100%"/></div>
        </div>
        <div className="row">
            <div className="col-2"><p>SASS </p></div>
            <div className="col"><ProgressBar completed={30} width="100%"/></div>
        </div>
        <div className="row">
            <div className="col-2"><p>Bootstrap </p></div>
            <div className="col"><ProgressBar completed={85} width="100%"/></div>
        </div>
        <div className="row">
            <div className="col-2"><p>ReactJS </p></div>
            <div className="col"><ProgressBar completed={40} width="100%"/></div>
        </div>
    </div>
    );
}
 
export default FrontEnd;