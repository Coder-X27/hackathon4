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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sapiente nemo, rerum maxime atque officia necessitatibus quam? Laborum, laboriosam dolorum?</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu2.gif" alt="" />
                            <h1 className="f-heading">Tender</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sapiente nemo, rerum maxime atque officia necessitatibus quam? Laborum, laboriosam dolorum?</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu3.gif" alt="" />
                            <h1 className="f-heading">Android</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sapiente nemo, rerum maxime atque officia necessitatibus quam? Laborum, laboriosam dolorum?</p>
                        </div>
                        <div className="f-card">
                            <img className="f-img" src="./fu4.gif" alt="" />
                            <h1 className="f-heading">Schemes</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sapiente nemo, rerum maxime atque officia necessitatibus quam? Laborum, laboriosam dolorum?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Future;