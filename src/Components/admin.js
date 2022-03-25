import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import Aditem from "./aditem";
import { MenuItems } from "../mainpage/Navbar/MenuItems";
import axios from "axios";


export const Admin = () => {

const [data, setdata] = useState('');





  const getData = async () => {
    const res = await axios.get(`http://localhost:9004/api`);
    setdata(res.data);
    
    
  };


  useEffect(() => {
  
getData()
   
  }, [])

  
 

  return (
    <div >
      {data &&
        data.map((entry) => (
          <Aditem
            production={entry.production}
            month={entry.month}
            type={entry.type}
            exports={entry.exports}
            capacity={entry.capacity}
          />
        ))}
    </div>
  );
};











