import React from 'react';
import nodejs from "../utils/nodejs.svg"
import mongodb from "../utils/mongodb.svg"
import mysql from "../utils/mysql.svg"
import "../css/skills.css"

const BackEnd = () => {
    return (  
        <div className="container">
            <br />
            <div className="card-columns">
				<div className="card">
					<div className="card-body">
						<img src={mongodb} alt="MongoDB" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={nodejs} alt="NodeJS" className="img-logo" />
					</div>
				</div>
				<div className="card">
					<div className="card-body">
						<img src={mysql} alt="MySQL" className="img-logo" />
					</div>
				</div>
			</div>
            <br />
        </div>
    );
}
 
export default BackEnd;