/* eslint-disable no-console */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import twitter from '../images/twitter.png';
import angelist from '../images/angellist.png';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast('Submitted successfully!!');

    emailjs.sendForm('service_yzjnlvv', 'template_65w74dj', form.current, 'kHixpJ16BlUfv8up6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>

      <section className="contact" id="contact">
        <h6>get in touch</h6>
        <h2>Contact</h2>

        <div className="contact-container">
          <form action="#" method="POST" className="contact-left" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name..." name="name" required />
            <input type="email" placeholder="Your Email..." name="email" required />
            <input type="text" placeholder="Subject..." name="subject" />
            <textarea type="text" placeholder="Your Message..." name="message" required />
            <button type="submit">Send</button>
          </form>
          <div className="contact-right">
            <div className="contact-info">
              <p>
                <span>Email:</span>
                {' '}
                tuyishimirericc@gmail.com
              </p>
              <p>
                <span>Phone:</span>
                {' '}
                +250 780 313 448
              </p>
              <p>
                <span>Address: </span>
                {' '}
                Kigali, Rwanda
              </p>
            </div>
            <iframe width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=kigali%20city%20tower&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            <ul className="social">
              <li><a href="https://github.com/TuyishimireEric" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a></li>
              <li><a href="https://www.linkedin.com/in/tuyishimireeric/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="github" /></a></li>
              <li><a href="mailto:tuyishimireericc@gmail.com?subject=portfolio" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="github" /></a></li>
              <li><a href="https://twitter.com/TuyishimirEric?t=2eZF5gQGecCpfZW-gEoDOw&s=08" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="github" /></a></li>
              <li><a href="https://angel.co/u/tuyishimire-eric" target="_blank" rel="noopener noreferrer"><img src={angelist} alt="github" /></a></li>
            </ul>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
      <footer>
        <br />
        <h6>© 2021 Eric Tuyishimire</h6>
      </footer>
    </>
  );
}

export default Contact;
