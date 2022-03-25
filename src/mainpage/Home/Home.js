import React, { Component } from "react";
import "./Home.css";

{/* <img src="https://thumbs.dreamstime.com/b/chemical-petrochemical-processing-plant-heavy-industry-stylized-vector-symbol-design-elements-emblem-127797723.jpg" alt="" /> */}
class Home extends Component {
  render() {
   
    return (
        <section id="Home" className="home container">
            <div className="animation">
                <div className="social-icons resp1">
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-facebook-f"></i></a>
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-twitter-alt"></i></a>
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-linkedin-alt"></i></a>
                </div>
                {/* <img src="https://thumbs.dreamstime.com/b/chemical-petrochemical-processing-plant-heavy-industry-stylized-vector-symbol-design-elements-emblem-127797723.jpg" alt="" />  */}
                {/* <img src="img.glb" alt="" /> */}
                {/* <img src="./chemical.gif" alt="" /> */}
                <img src="https://cdn.dribbble.com/users/1034529/screenshots/3030344/media/722d7c524bac3e4ba329f5c1997a3f95.gif" alt="" />
                {/* <img src="./giphy.gif" alt="" /> */}
            </div>
            <div className="home-content">
                <h1 className="heading">Petro <span>Stats</span></h1>
                <div className="home-description">
                    <p>
                    Presently, production data is being captured based on offline data provided via email or by post. There is a need of configured(with checks and validations) platform which capture monthly production of the Chemical and Petrochemical manufacturing units with their respective user name id and password.This system may also allow authorized persons to revise their respective statistical information.
                    </p>
                    </div>
                <div className="home-buttons">
                    <button className="btn-company" > <a href="/register">Register</a></button>
                    <button className="btn-admin" ><a href="/login">Login</a></button>
                </div>
            </div>
            <div className="social-icons resp2">
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-facebook-f"></i></a>
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-twitter"></i></a>
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-linkedin-alt"></i></a>
            </div>
        </section>
    );
  }
}

export default Home;
