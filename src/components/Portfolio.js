import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h6>Portfolio</h6>
      <h2>My work</h2>

      <div className="project-container">
        <div className="project">
          <div className="overlay" />
          <div className="picture img1" />
          <div className="project-desc">
            <p>React Js | Rails</p>
            <h3>Car Booking App</h3>
            <div className="description">
              <p>
                The project is based on an app to book an appointment to try a Car.
                User see all cars in database and is able to book and try one.
                User can add and delete a car if user role is admin

              </p>

              <div className="btns">
                <a href="https://reserve-car.onrender.com/">Live</a>
                <a href="https://github.com/learnwithalfred/backend-microverse-final-capstone">Codes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="overlay" />
          <div className="picture img2" />
          <div className="project-desc">
            <p>html & CSS | JavaScript</p>
            <h3>CHOGM-2022</h3>
            <div className="description">
              <p>
                This is a Capstone CHOGM meeting website the 20th june 2022 - 25th june 2022,
                the Commonwealth Heads Of Government Meeting (CHOGM) took place in Rwanda,
                In this project, I have created a website which can be used in CHOGM meetings
                to inform and give informations about the meeting.

              </p>

              <div className="btns">
                <a href="https://tuyishimireeric.github.io/Capstone-Project-CHOGUM/index.html">Live</a>
                <a href="https://github.com/TuyishimireEric/Capstone-Project-CHOGUM">Codes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="overlay" />
          <div className="picture img3" />
          <div className="project-desc">
            <p>html & CSS | JavaScript</p>
            <h3>Movie Series</h3>
            <div className="description">
              <p>
                This is JavaScript Module capstone project, and this project is about building a
                web application
                based on an external API. we have selected an API that provides data and
                another wich adds the
                comments and likes about movie series and then built the webapp around it.

              </p>

              <div className="btns">
                <a href="https://tuyishimireeric.github.io/JavaScript-group-capstone/dist/">Live</a>
                <a href="https://github.com/TuyishimireEric/JavaScript-group-capstone">Codes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="overlay" />
          <div className="picture img4" />
          <div className="project-desc">
            <p>html & CSS | JavaScript</p>
            <h3>Leader Board</h3>
            <div className="description">
              <p>
                This is a JavaScript project for the Leaderboard list app,
                using webpack and ES6 features, notably modules.

              </p>

              <div className="btns">
                <a href="https://tuyishimireeric.github.io/Leaderboard/dist/">Live</a>
                <a href="https://github.com/TuyishimireEric/Leaderboard">Codes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="overlay" />
          <div className="picture img5" />
          <div className="project-desc">
            <p>React Js </p>
            <h3>Online shopping</h3>
            <div className="description">
              <p>
                This project is based on an eCommerce website built with React and Redux.
                The user can check all the products in our and get more details on
                selected product. The user can also search for a product in our store.

              </p>

              <div className="btns">
                <a href="https://et-online-shopping.netlify.app/2">Live</a>
                <a href="https://github.com/TuyishimireEric/online-shopping">Codes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="overlay" />
          <div className="picture img6" />
          <div className="project-desc">
            <p>React Js | Rails</p>
            <h3>Math Magician</h3>
            <div className="description">
              <p>
                This project is based on an eCommerce website built with React and Redux.
                The user can check all the products in our and get more details on
                selected product. The user can also search for a product in our store.

              </p>

              <div className="btns">
                <a href="https://github.com/TuyishimireEric/math_magician">Live</a>
                <a href="https://ericalculator.netlify.app/Calculator">Codes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
