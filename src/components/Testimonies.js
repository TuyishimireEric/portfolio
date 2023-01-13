import './Testimonies.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonies() {
  return (
    <section className="testimonies">
      <div className="testimonies-left">
        <h6>What people says?</h6>
        <h2>Testimonials.</h2>
      </div>
      <div className="testimonies-right">
        <Carousel>
          <div className="testimony">
            <h3>Anas (Bassi) Abubakar</h3>
            <p>
              Tuyishimire Eric is a proactive, result-oriented,
              responsible, and technically sound developer and always ready to put all his
              energy and time to get the job done and get it done well.
              His outstanding analytical
              skills and fast learning makes him pick up new concepts and transfer the knowledge
              to his own projects fast. He is professional, hardworking, and a team player with
              impeccable
              communication skills.Tuyishimire Eric is a valuable asset to
              any team and I recommend him without
              reservation.

            </p>
          </div>
          <div className="testimony">
            <h3>Pierre Celestin Moussa</h3>
            <p>
              Eric and I worked together on several projects and we study
              together at Microverse,
              and I was lucky to call him my coworker.
              He consistently gave 100 percent effort to the team and played a
              significant role in ensuring that we completed assignments on time.
              He had excellent time management skills and had a knack
              for keeping everyone calm and productive
              during intense crunch periods. Eric is proactive too and
              any team would be lucky to have him as
              a coworker, and I couldn’t recommend him more for any
              business looking for new talent.

            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonies;
