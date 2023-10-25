import React from 'react';
import { Fade } from "react-awesome-reveal";

class BounceExample extends React.Component {
  render() {
    const revelado = true; // Define la variable revelado
    const elementoRef = React.createRef(); // Define la referencia elementoRef

    return (
      
      <div>
        <Fade>
          <section
            id="AboutMe"
            className={`about--section elemento-a-revelar${revelado ? ' revelado' : ''}`}
            ref={elementoRef}
          >
            <div className="about--section--img">
              <img src="./img/about-me.png" alt="About Me" />
            </div>
            <div className="hero-section--content--box about--section--box">
              <div className="hero--section--content">
                <p className="section--title">About</p>
                <h1 className="skills-section--heading">About Me</h1>
                <p className="hero--section-description">
                  Hi, I'm Jose Fernando Monterrosa Castro from El Salvador. I am currently working on personal projects that include frameworks like React.js, Vue.js, and Angular.js. Passionate for computers, their capabilities, possibilities, and potential. I'm also interested in learning Backend Development as well.
                </p>
                <p className="hero--section-description">
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li>Listening to music</li>
                  <li>Playing Games</li>
                  <li>Working Out</li>
                </ul>
              </div>
            </div>
          </section>
          </Fade>
      </div>
      
    );
  }
}

export default BounceExample;





