import './App.scss';  
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
      {/* Reference: https://rpj.bembi.org/#bubbles*/}
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 4,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 400,
                  "duration": 1.5
                }
              }
          }
      }} />
        <div className="content">
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
