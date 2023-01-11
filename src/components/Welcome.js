import './Welcome.css';
import Fade from 'react-reveal/Fade';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import twitter from '../images/twitter.png';
import angelist from '../images/angellist.png';

function Welcome() {
  return (
    <section id="home">
      <div className="overlay">
        <div className="welcome" />
      </div>
      <Fade left cascade>
        <main>
          <h6>Hello, I&apos;m</h6>
          <h1>Eric Tuyishimire</h1>
          <p>Software Developer</p>

          <ul className="social">
            <li><a href="https://github.com/TuyishimireEric"><img src={github} alt="github" /></a></li>
            <li><a href="https://www.linkedin.com/in/tuyishimireeric/"><img src={linkedin} alt="github" /></a></li>
            <li><a href="mailto:email@example.com?subject=portfolio"><img src={gmail} alt="github" /></a></li>
            <li><a href="https://twitter.com/TuyishimirEric?t=2eZF5gQGecCpfZW-gEoDOw&s=08"><img src={twitter} alt="github" /></a></li>
            <li><a href="https://venture.angellist.com/v/tuyishimire-eric/i/tuyishimire-eric/portfolio/dashboard"><img src={angelist} alt="github" /></a></li>
          </ul>
        </main>
      </Fade>
    </section>
  );
}

export default Welcome;
