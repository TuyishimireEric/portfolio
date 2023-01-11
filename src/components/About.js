import './About.css';
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <section className="about" id="about">
      <Slide bottom cascade>
        <div className="my-story">
          <h6>About</h6>
          <h2>My mission is design develop the best Websites around</h2>
          <p>
            Hello! My name is Eric Tuyishimire, I am a full stack developer based in Kigali, Rwanda.
            I enjoy creating things that live on the internet. My interest in software
            development development
            started back in 2014 and I am happy to do what I love.
            <br />
            <br />
            As a full stack developer, I am dedicated to building modern and effective
            web applications from start to finish. I am always looking to
            learn and improve my skills,
            and am excited to take on new challenges and projects.
            <br />
            <br />
            I am committed to delivering high-quality solutions for my clients and partners.
          </p>

          <a href="#home">Download CV</a>
        </div>
      </Slide>
      <Slide bottom cascade>
        <div className="skills">
          <h2>Skills</h2>
          <div className="bar">
            <span className="title">
              <h6>HTML & CSS</h6>
              <h5>90%</h5>
            </span>
            <div className="bar-back">
              <Slide left cascade delay={1600}>
                <div className="bar-front html" />
              </Slide>
            </div>
          </div>
          <div className="bar">
            <span className="title">
              <h6>javaScript</h6>
              <h5>80%</h5>
            </span>
            <div className="bar-back">
              <Slide left cascade delay={1620}>
                <div className="bar-front js" />
              </Slide>
            </div>
          </div>
          <div className="bar">
            <span className="title">
              <h6>React Js</h6>
              <h5>75%</h5>
            </span>
            <div className="bar-back">
              <Slide left cascade delay={1640}>
                <div className="bar-front react" />
              </Slide>
            </div>
          </div>
          <div className="bar">
            <span className="title">
              <h6>Rails</h6>
              <h5>68%</h5>
            </span>
            <div className="bar-back">
              <Slide left cascade delay={1660}>
                <div className="bar-front rails" />
              </Slide>
            </div>
          </div>
          <div className="bar">
            <span className="title">
              <h6>Graphic Design</h6>
              <h5>89%</h5>
            </span>
            <div className="bar-back">
              <Slide left cascade delay={1680}>
                <div className="bar-front design" />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default About;
