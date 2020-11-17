import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const BackEnd = () => {
    return (  
        <div className="container">
            <br />
            <div className="row">
                <div className="col-3"><p>NodeJS </p></div>
                <div className="col"><ProgressBar completed={60} width="100%"/></div>
            </div>
            <div className="row">
                <div className="col-3"><p>MongoDB </p></div>
                <div className="col"><ProgressBar completed={70} width="100%"/></div>
            </div>
            <div className="row">
                <div className="col-3"><p>MySql </p></div>
                <div className="col"><ProgressBar completed={70} width="100%"/></div>
            </div>
        </div>
    );
}
 
export default BackEnd;