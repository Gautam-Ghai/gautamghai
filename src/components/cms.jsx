import React from 'react';
import wordpress from "../utils/wordpress.svg"
import terminalfour from "../utils/terminalfour.svg"

const Cms = () => {
    return (  
        <div className="container">
            <br />
            <div className="card-columns">
				<div className="card">
					<div className="card-body">
						<img src={wordpress} alt="WordPress" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={terminalfour} alt="TerminalFour   " className="img-logo" />
					</div>
				</div>
			</div>
            <br />
        </div>
    );
}
 
export default Cms;