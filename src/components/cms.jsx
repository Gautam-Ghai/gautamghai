import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Cms = () => {
    return (  
        <div className="container">
            <br />
            <div className="row">
                <div className="col-2"><p>WordPress </p></div>
                <div className="col"><ProgressBar completed={90} width="100%"/></div>
            </div>
            <div className="row">
                <div className="col-2"><p>TerminalFour </p></div>
                <div className="col"><ProgressBar completed={60} width="100%"/></div>
            </div>
        </div>
    );
}
 
export default Cms;