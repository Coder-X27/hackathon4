import React,{Component} from "react";
import './Footer.css'

class Footer extends Component{
    render(){
        return( 
            <div className="Footer">
                <div className="footermain">
                    <h1><span>Petro </span>Stats</h1>
                    <p>Our mission is to provide a platform where you can feed, fetch and access Petrochemical <br />datas and even trade and generate business opportunities for anyone, anywhere.</p>
                    <div class="social-icon">
                        <div class="social-item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
                        </div>
                        <div class="social-item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
                        </div>
                        <div class="social-item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
                        </div>
                        <div class="social-item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
                        </div>
                    </div>
                    <p>Copyright © 2022 Name. All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;