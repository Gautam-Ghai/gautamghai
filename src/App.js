import Card from "./components/card"
import "./App.scss"
import Footer from "./components/footer"
import Particles from 'react-particles-js';


function App() {
  return (
      <div className="container-fluid section">
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
        <Footer />
      </div>
  );
}

export default App;
