import React,{Component} from "react";
import './Future.css'

class Future extends Component{
    render(){
        return( 
            <div className="future-container">
                <div className="future">
                    <h1 className="heading">Future <span> Goals</span></h1>
                    <div className="future-cards">
                        <div className="f-card">
                            <img className="f-img1" src="./fu1.gif" alt="" />
                            <h1 className="f-heading">BlockChain</h1>
                            <p>Developing a Digitally Distributed Blockchain that would be Decentralized existing across a peer-to-peer network. This would help to provide more security and transparency to the Data.</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu2.gif" alt="" />
                            <h1 className="f-heading">Tender</h1>
                            <p>Establishing a formal, structured procedure for generating competing offers from different potential suppliers or contractors looking to obtain an award of business activity.</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu3.gif" alt="" />
                            <h1 className="f-heading">Android</h1>
                            <p>
To increse comfort and to take the feasibility at a higher level our website will soon becoming an Android Friendly. This will definitely gonna increase productivity as well as mobility.</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu4.gif" alt="" />
                            <h1 className="f-heading">Schemes</h1>
                            <p>We are providing Government Schemes launched by the Government of India with the aim of addressing the socio-economic welfare of the citizens of this nation. Such schemes play a very important role in solving many problems that beset Indian society and helps in achieving the goals to achieve a welfare nation as enshrined in our Constitution.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Future;