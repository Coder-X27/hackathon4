import React, { Component } from "react";
import './About.css'

class About extends Component {
    render() {
        return (
            <div id="About" className="about-container">
                <h1 className="heading">About <span>Us</span> </h1>
                <p> <b> Our team consists of six maestros who perfectly compliment each other.  The thing which brought us together is our equivalent dedication.The trust which our college have showered, make us more optimistic and enthusiastic. The kind of brainstorming, researching, implementing and cross checking which we did for weeks has already make us exceptional.</b></p>
                <div className="about-team">
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C4E03AQH5Cu3RwH7ngg/profile-displayphoto-shrink_400_400/0/1640112391508?e=1653523200&v=beta&t=EdRHczu5_USv5even_reE2RkKqGvwF4Iu6V1oBMEhYc' alt="" />
                        <h1 className="profile-name ">Jay</h1>
                        <h2 className="profile-role">MERN Developer</h2>
                        <a href="https://www.linkedin.com/in/jaybhavsar278/" target="_blank" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C5603AQHrg7MAy10f9g/profile-displayphoto-shrink_400_400/0/1628949431031?e=1653523200&v=beta&t=dgJheVT0chCpH5dadLj5v8mrZtAuk4xA3RSbso7hRj8' alt="" />
                        <h1 className="profile-name ">Khushi Garg</h1>
                        <h2 className="profile-role">Frontend Developer</h2>
                        <a href="https://www.linkedin.com/in/khushi-garg-0a8787187" target="_blank" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C5603AQEpDtCcpcdfWA/profile-displayphoto-shrink_400_400/0/1638074669352?e=1653523200&v=beta&t=IqAzUonUlQSvBjr_EfX6JGaayUcmeY7cOaXTeo-rPvo' alt="" />
                        <h1 className="profile-name ">Karan</h1>
                        <h2 className="profile-role">Frontend Developer</h2>
                        <a href="https://www.linkedin.com/in/karan-sharma-23574a1b9/" target="_blank" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHtQALHqT4uVg/profile-displayphoto-shrink_400_400/0/1648113829724?e=1653523200&v=beta&t=W18xUBaUp_omP0Sd8phWt7f7Q7ujZEhP6SdbQPGVuqw' alt="" />
                        <h1 className="profile-name ">Mayank</h1>
                        <h2 className="profile-role">UI/UX Designer</h2>
                        <a href="https://www.linkedin.com/in/mayank-rohilla-40a292206" target="_blank" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C5603AQFvytTBRxvntw/profile-displayphoto-shrink_400_400/0/1648116282479?e=1653523200&v=beta&t=1Wgoy9AsRIVJPjpA4xe7Cffs83x5nlsS13pnCo7GWGw' alt="" />
                        <h1 className="profile-name ">Khushi Soni</h1>
                        <h2 className="profile-role">Content Writer</h2>
                        <a href="https://www.linkedin.com/in/khushisoni2507" target="_blank" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQEdhJDenc7uxg/profile-displayphoto-shrink_400_400/0/1612512425910?e=1653523200&v=beta&t=FIOe0oRdscmzvrY-aqJlVnbbrprsxt3bZmsFEltmUYg' alt="" />
                        <h1 className="profile-name ">Nishant</h1>
                        <h2 className="profile-role">Graphic Designer</h2>
                        <a href="https://www.linkedin.com/in/nishant-munshi-611625202" target="_blank" className="contact-btn">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;