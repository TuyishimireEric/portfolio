import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="my-story">
        <h6>About</h6>
        <h2>My mission is to design and develop the best Websites around</h2>
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

        <a href="https://docs.google.com/document/d/1BtmG6keWTTbgMbRowW58EEJlnsK38m-NcserRfnckao/edit?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="bar">
          <span className="title">
            <h6>HTML & CSS</h6>
            <h5>90%</h5>
          </span>
          <div className="bar-back">
            <div className="bar-front html" />
          </div>
        </div>
        <div className="bar">
          <span className="title">
            <h6>javaScript</h6>
            <h5>80%</h5>
          </span>
          <div className="bar-back">
            <div className="bar-front js" />
          </div>
        </div>
        <div className="bar">
          <span className="title">
            <h6>React Js</h6>
            <h5>75%</h5>
          </span>
          <div className="bar-back">
            <div className="bar-front react" />
          </div>
        </div>
        <div className="bar">
          <span className="title">
            <h6>Rails</h6>
            <h5>68%</h5>
          </span>
          <div className="bar-back">
            <div className="bar-front rails" />
          </div>
        </div>
        <div className="bar">
          <span className="title">
            <h6>Graphic Design</h6>
            <h5>89%</h5>
          </span>
          <div className="bar-back">
            <div className="bar-front design" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
