/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from 'react';
import './Contact.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import twitter from '../images/twitter.png';
import angelist from '../images/angellist.png';
import Slide from 'react-reveal/Slide';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      toast("Submitted successfully!!");
  
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
        
        <section className='contact' id="contact">
        <Slide bottom cascade>
            <h6>get in touch</h6>
            <h2>Contact</h2>

            <div className='contact-container'>
                <form action="#" method='POST' className='contact-left' ref={form} onSubmit={sendEmail} >
                    <input type="text" placeholder="Name..."  name="name" required />
                    <input type="email" placeholder="Your Email..." name="email" required />
                    <input type="text" placeholder="Subject..."  name="subject" />
                    <textarea type="text" placeholder="Your Message..." name="message" required />
                    <button type='submit'>Send</button>
                </form>
                <div className='contact-right'>
                    <iframe width="600" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=kigali%20city%20tower&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
        </Slide>
        </section>
        <footer> 
        <Slide bottom cascade>
            <h4>let's connect</h4>
            <ul className='social'>
                <li><a href="https://github.com/TuyishimireEric"><img src={github} alt="github" /></a></li>
                <li><a href="https://www.linkedin.com/in/tuyishimireeric/"><img src={linkedin} alt="github" /></a></li>
                <li><a href="mailto:email@example.com?subject=portfolio"><img src={gmail} alt="github" /></a></li>
                <li><a href="https://twitter.com/TuyishimirEric?t=2eZF5gQGecCpfZW-gEoDOw&s=08"><img src={twitter} alt="github" /></a></li>
                <li><a href="https://venture.angellist.com/v/tuyishimire-eric/i/tuyishimire-eric/portfolio/dashboard"><img src={angelist} alt="github" /></a></li>
            </ul>  
            <h6>Tuyishimire Eric | 2023</h6>
            </Slide>
        </footer>
        </>
    )
}

export default Contact;
