import React,{Component} from "react";
import './Services.css'

class Services extends Component{
    render(){
        return( 
            <div id="Services" className="services-container">
                <h1 className="heading"><span>S</span>ervices</h1>
                <div className="services">
                    <div className="services-card">
                        <img src="./organizationneed.gif" alt="" />
                        <h1 className="title">Organization's Need</h1>
                        <p><b><u>Stores Data:- </u></b><br />
                            Our website captures monthly production of the Chemical and Petrochemical manufacturing units with their respective user name id and password and allow authorized persons to systematically revise their respective statistical information.
                            </p>
                        <p> <b><u>Checks and Validations:- </u></b><br />
                        Our website provides a prominent relief from the human errors which arises unwillingly or subconsciously.
                        </p>
                    </div>
                    <h1 className="title1" >Our Innovation</h1>
                    <div className="service-rowcards">
                        <div className="services-card">
                            <img className="handshakegif" src="./anima2.gif" alt="" />
                            <h1 className="title">Admin Interface</h1>
                            <p>This portal smoothly provides prompt overview of registered industries to the admin. It entirely covers the requirements of admin about the recorded data.</p>
                        </div>
                        <div className="services-card">
                            <img src="./anima4.gif" alt="" />
                            
                            <h1 className="title">Apt Visual Aids</h1>
                            <p>All visual aids including graphs, graphics, charts, etc which plays a great role on any platform to enhance the understanding and for multiplying the experience even better are present everywhere on our website.</p>
                        </div>
                        <div className="services-card">
                            <img src="./anima3.gif" alt="" />
                            
                            <h1 className="title">Inhance business opportunities</h1>
                            <p>This platform provides universal business opportunities by allowing them to deal with anyone present on our website after analyzing their datas and Petrochemicals present.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Services;