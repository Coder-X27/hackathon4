import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import Aditem from "./aditem";
import { MenuItems } from "../mainpage/Navbar/MenuItems";
import axios from "axios";
import Navbar from '../mainpage/Navbar/Navbar'
import BarChart from '../Components/BarChart'
import PieChart from '../Components/PieChart'
import "./admin.css";
import { useHistory } from 'react-router-dom'


export const Admin = () => {
  const [data, setdata] = useState("");

  const getData = async () => {
    const res = await axios.get(`http://localhost:9004/api`);
    setdata(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const history = useHistory()
  const stats=()=>{
    history.push("/adminstats")
  }
  
  return (
    <div className="container3">
      <Navbar/>
      <div className="container12">
        <div className="butns">
          {/* <button>Statistical Form</button> */}
          <button onClick={stats} >Pictorial Form</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th className="lwid" scope="col">Name</th>
              <th className="swid" scope="col">Month</th>
              <th className="swid" scope="col">Capacity</th>
              <th className="swid" scope="col">Production</th>
              <th className="swid" scope="col">Export</th>
            </tr>
          </thead>
        </table>
      </div>

      {data &&
        data.map((entry) => (
        <>
          <div className="container12">
            <table className="table hr">
              <tbody>
                <tr>
                  <td className="lwid">{entry.type}</td>
                  <td className="swid">{entry.month}</td>
                  <td className="swid">{entry.capacity}</td>
                  <td className="swid">{entry.production}</td>
                  <td className="swid">{entry.exports}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
        ))}
    </div>
  );
};
