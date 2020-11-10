import Card from "./components/card"
import "./App.scss"
import Particles from 'react-particles-js';

function App() {
  return (
      <div className="section">
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
        <div className="container">
          <div className="column">
            <Card  />
          </div>
        </div>
      </div>
  );
}

export default App;
