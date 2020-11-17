import Card from "./card"
import Particles from 'react-particles-js';
import React from 'react';
import "../css/info.scss"

const Info = (props) => {
    return (
        <div className="container-fluid section" id="Home">
        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 100, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            },
          },
          interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        } 
        }}
        width="100%"

        height="100vh"
        /> 
          <div className="column">
            <Card  />
          </div>
      </div>
    );
}
 
export default Info;
