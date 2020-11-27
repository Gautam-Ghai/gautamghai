import React from 'react';
import html from "../utils/html.svg"
import css from "../utils/css.svg"
import sass from "../utils/sass.svg"
import javascript from "../utils/javascript.svg"
import bootstrap from "../utils/bootstrap.svg"
import react from "../utils/react.svg"


const FrontEnd = () => {
    return (  
        <div className="container">
            <br />
            <div className="card-columns">
				<div className="card">
					<div className="card-body">
						<img src={html} alt="HTML5" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={css} alt="CSS3" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={bootstrap} alt="Bootstrap5" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={sass} alt="SASS" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={javascript} alt="JavaScript3" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={react} alt="ReactJS" className="img-logo" />
					</div>
				</div>
			</div>
			<br />
        </div>
    );
}
 
export default FrontEnd;