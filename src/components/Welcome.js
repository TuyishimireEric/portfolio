import './Welcome.css';
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
      <main>
        <h6>Hello, I&apos;m</h6>
        <h1>Eric Tuyishimire</h1>
        <p>Software Developer</p>

        <ul className="social">
          <li><a href="https://github.com/TuyishimireEric" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a></li>
          <li><a href="https://www.linkedin.com/in/tuyishimireeric/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="github" /></a></li>
          <li><a href="mailto:email@example.com?subject=portfolio" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="github" /></a></li>
          <li><a href="https://twitter.com/TuyishimirEric?t=2eZF5gQGecCpfZW-gEoDOw&s=08" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="github" /></a></li>
          <li><a href="https://angel.co/u/tuyishimire-eric" target="_blank" rel="noopener noreferrer"><img src={angelist} alt="github" /></a></li>
        </ul>
      </main>
    </section>
  );
}

export default Welcome;
