/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Navbar.css';
import React, { useEffect, useState } from 'react';
import download from '../images/download.png';

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const aboutPosition = document.querySelector('#about').offsetTop - 60;
      const portfolioPosition = document.querySelector('#portfolio').offsetTop - 60;
      const servicesPosition = document.querySelector('#services').offsetTop - 60;
      const contactPosition = document.querySelector('#contact').offsetTop - 60;

      const scrollPosition = window.scrollY;

      setScrollY(window.scrollY);
      if (scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (scrollPosition >= contactPosition) {
        setActiveLink('contact');
      } else if (scrollPosition >= servicesPosition) {
        setActiveLink('services');
      } else if (scrollPosition >= portfolioPosition) {
        setActiveLink('portfolio');
      } else if (scrollPosition >= aboutPosition) {
        setActiveLink('about');
      } else {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={isFixed ? 'navbar fixed' : 'navbar'}>
        <h3>EricT</h3>
        <ul>
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
          <li><a href="#services" className={activeLink === 'services' ? 'active' : ''}>Services</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
          <a href="https://docs.google.com/document/d/1BtmG6keWTTbgMbRowW58EEJlnsK38m-NcserRfnckao/edit?usp=sharing" className="button">
            <p>Download CV</p>
            <span><img src={download} alt="download" /></span>
          </a>
        </ul>
        <nav className={isOpen ? 'hmbOn' : ''} onClick={toggleMenu}>
          <span className="span1" />
          <span className="span2" />
        </nav>
      </div>
      <div className={isOpen ? 'menuOn' : 'menuOff'} id="hide">
        <ul onClick={toggleMenu}>
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
          <li><a href="#services" className={activeLink === 'services' ? 'active' : ''}>Services</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
          <a href="https://docs.google.com/document/d/1BtmG6keWTTbgMbRowW58EEJlnsK38m-NcserRfnckao/edit?usp=sharing" className="button">
            <p>Download CV</p>
            <span><img src={download} alt="download" /></span>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
