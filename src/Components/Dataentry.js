import React, { useState } from 'react'
import axios from "axios"
// import { useHistory } from 'react-router-dom'
// import '../../Components/register/reg.css'
import './dataentry.css'

export default function Dataentry() {

    const [user, setUser] = useState({
        type: "",
        // year: "",
        capacity: "",
        production: "",
        exports: "",
        month:"",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const feed = () => {
        console.log("jay")
        const { capacity, production, capacityU, imports, exports, type, month } = user
        if (capacity && production && capacityU, imports, exports, type, month) {
            alert("Data feeded")
            axios.post("http://localhost:9004/feed", user)
                .then(res => console.log(res))
        } else {
            alert('Fill all data')
        }


        // .then(res => console.log(res))

        /////This is to be done after making backend

    }
    //   const history = useHistory()



    return (
        <>
            <div className="container1 ">
                <div className='data-entry'>
                    <div className="form">
                        {console.log("User", user)}
                        <h1 className='heading1'>Enter your Company's Production Data</h1>
                        <div className="col-md-3">
                            <label for="validationDefault04" class="form-label">Group of Various Petrochemicals</label>
                            <select className="form-select" id="validationDefault04" onChange={handleChange} name="type" value={user.type} required>
                                <option>Type</option>
                                <option>Synthetic Fibres/Yarn</option>
                                <option>Polymers</option>
                                <option >Synthetic Rubber</option>
                                <option >Synthetic Detergent Intermediates</option>
                                <option >Performance Plastics</option>
                                <option >Total Basic Major Petrochemicals</option>
                            </select>
                        </div>
                        {/* <div className='mb-3'>
                            <label for="exampleInputEmail1" class="form-label">Year</label>
                            <input type="text" className="form-control" id="validationServer03" placeholder='Enter Year' name="year" value={user.year} onChange={handleChange} />
                        </div> */}
                        <div className="col-md-3">
                            <label for="validationDefault04" class="form-label">Month</label>
                            <select className="form-select" id="validationDefault04" onChange={handleChange} name="month" value={user.month} required>
                                <option>Month</option>
                                <option>Janaury</option>
                                <option>Febuary</option>
                                <option >March</option>
                                <option >April</option>
                                <option >May</option>
                                <option >June</option>
                                <option >July</option>
                                <option >August</option>
                                <option >September</option>
                                <option >Octomber</option>
                                <option >November</option>
                                <option >December</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputEmail1" class="form-label1">Enter Capacity</label>
                            <input type="text" className="form-control" placeholder='Enter Capacity' name="capacity" value={user.capacity} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Enter Production</label>
                            <input type="text" className="form-control" placeholder='Enter Production' name="production" value={user.production} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label for="exampleInputPassword1" class="form-label">Enter Exports</label>
                            <input type="text" className="form-control" placeholder='Enter Exports' name="exports" value={user.exports} onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Upload Digital Signature</label>
                            <input class="form-control-btn" type="file" className="form-control"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I hereby declare that the data entered is accurate and correct</label>
                        </div>
                        <div className='btns'>
                            <button type="submit" class="btn-primary" onClick={feed}>Submit</button>
                            <button type="submit" class="btn-primary col-md-3"> <a href="/main">LogOut</a></button>
                        </div>

                        {/* <button type="submit" class="btn btn-primary" onClick={() => history.push("/login")}>Login</button> */}
                    </div>
                </div>

            </div>
        </>
    )
}
