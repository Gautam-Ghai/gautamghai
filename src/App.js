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
              value: 80, 
              density: { 
                enable: true, 
                value_area: 800, 
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
