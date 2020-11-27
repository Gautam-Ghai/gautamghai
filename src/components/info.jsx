import Profile from "./profile"
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
              value: 150, 
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
        },
        style: {
          color: "black",
        }
        }}
        width="100%"

        height="100vh"
        /> 
          <div className="column">
            <Profile  />
          </div>
      </div>
    );
}
 
export default Info;
