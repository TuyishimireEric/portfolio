import soft from '../images/soft.png';
import review from '../images/review.png';
import design from '../images/design.png';
import planning from '../images/planning.png';
import point from '../images/point.png';
import logic from '../images/logic.png';
import code from '../images/code.png';
import support from '../images/support.png';
import testing from '../images/test.png';
import Slide from 'react-reveal/Slide';
import './Services.css';

function Services(){
    return (
        <section className='services' id="services">
            <Slide bottom cascade>
            <h6>Best features</h6>
            <h2>Services</h2>
            <div className='service-back'>
                <div className='service-cards'>
                    <div className='card'>
                        <div className='in-card'>
                            <img src={soft} alt="software development" />
                            <h3>Software development</h3>
                            <p>Offering full stack software development. Strong front-end and back-end background.
                                Proficient in project delivery and collaboration.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='in-card'>
                            <img src={review} alt="software development" />
                            <h3>IT Consultancy & Mentorship</h3>
                            <p>Offering IT consultancy and mentorship services.
                            Passionate about helping others grow in the field of IT.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='in-card'>
                            <img src={design} alt="software development" />
                            <h3>Graphic Design</h3>
                            <p>Graphic design services for print and digital media. Skilled in design 
                                software and delivering projects on time</p>
                        </div>
                    </div>
                </div>
                <div className='talk'>
                    <h2>About your next project...</h2>
                    <a href='#contact'>
                        <p>Let's talk</p>
                        <span className='in-card'><p>Let's talk</p></span>
                    </a>
                </div>
                <div className='methodology'>
                    <h6>My methodology</h6>
                    <div className='method-container'>
                        <div className='method-1'>
                            <div className='shape'>
                                <img src={planning} alt='planning'/>
                            </div>
                            <div className='method-desc'>
                                <span>01</span>
                                <h3>Planning</h3>
                            </div>
                        </div>
                        <img src={point} alt='planning' className='pointer down'/>
                        <div className='method-1'>
                            <div className='method-desc rev'>
                                <span>02</span>
                                <h3>Analysis</h3>
                            </div>
                            <div className='shape'>
                                <img src={logic} alt='planning'/>
                            </div>
                        </div>
                        <img src={point} alt='planning' className='pointer up'/>
                        <div className='method-1'>
                            <div className='shape'>
                                <img src={design} alt='planning'/>
                            </div>
                            <div className='method-desc'>
                                <span>03</span>
                                <h3>Design</h3>
                            </div>
                        </div>
                        <img src={point} alt='planning' className='pointer down'/>
                        <div className='method-1'>
                            <div className='method-desc rev'>
                                <span>04</span>
                                <h3>development</h3>
                            </div>
                            <div className='shape'>
                                <img src={code} alt='planning'/>
                            </div>
                        </div>
                        <img src={point} alt='planning' className='pointer up'/>
                        <div className='method-1'>
                            <div className='shape'>
                                <img src={testing} alt='planning'/>
                            </div>
                            <div className='method-desc'>
                                <span>05</span>
                                <h3>Testing</h3>
                            </div>
                        </div>
                        <img src={point} alt='planning' className='pointer down'/>
                        <div className='method-1'>
                            <div className='method-desc rev'>
                                <span>06</span>
                                <h3>Support</h3>
                            </div>
                            <div className='shape'>
                                <img src={support} alt='planning'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            
        </Slide>
        </section>
    )
}

export default Services;