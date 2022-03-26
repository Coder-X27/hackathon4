import { useState } from 'react';
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/register/register';
// import Homepage from './homepage';
import Dataentry from './Components/Dataentry'
import Navbar from "./mainpage/Navbar/Navbar";
import Footer from "./mainpage/Footer/Footer";
import Home from './mainpage/Home/Home';
import Services from './mainpage/Services/Services'
import About from './mainpage/About/About'
import Contact from './mainpage/Contact/Contact'
import Future from './mainpage/Future/Future'
import {Admin} from './Components/admin'

import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import { ProductionData } from "./Data";

// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"

function App() {

  const [user, setLoginUser] = useState({})
  const [productionData, setproductionData] = useState({
    labels: ProductionData.map((data) => data.year),
    datasets: [
      {
        label: "exports",
        data: ProductionData.map((data) => data.exports),
        backgroundColor: [
          "red",
          "blue",
          "black",
          "white",
          "orange",
          "crimson",
          "pink",
          "green",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  //Getting Data from mongo-------------------------------
  // getData = ()=>{
  //   axios.get('/api')
  //   .then((response)=>{
  //     const data = response.data;
  //     console.log('data has been received')
  //   })
  //   .catch(()=>{
  //     alert('error retreiving data')
  //   })
  // }

  return (
    <>
      {/* <Homepage/> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
              {
                user && user._id ? <Dataentry /> : <Login setLoginUser={setLoginUser} />
              }
          </Route>
          <Route path="/login">
            {/* <Navbar/> */}
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            {/* <Navbar /> */}
            <Register />
          </Route>
          <Route path="/main">
            <div className="App" >
              <Navbar  />
              <Home />
              <Services />
              <About />
              <Future/>
              <Contact />
              <Footer />
            </div>
          </Route>
        <Route path='/admin'>
          <Admin/>
      
        </Route>


        <Route path='/adminstats'>
        <div className="charts">
          <div className="barchart margincharts" style={{ width: 700 }}>
            <BarChart chartData={productionData} />
          </div>
          <hr />
          <div className="piechart margincharts" style={{ width: 400 }}>
            <PieChart chartData={productionData} />
          </div>
        </div>

        </Route>



        </Switch>
      </Router>

    </>

  );
}

export default App;
