import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../Service/api";

const SignUp =() => {

    const [ customerData, setCustomerData] = useState({
        firstName: "",
        lastName: "",
        Email:"",
        Password:"",
    })

  const { firstName, lastName } = customerData;

  const handleChannge = (e) => {
    setCustomerData( {...customerData, [e.target.name]: [e.target.value] } )
  }

  const addDetails = async (e) => {
    e.preventDefault();
    await addUser(customerData);
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    alert("Successfully signed up!");
  }

        return (
            <div id="image" style={{height:586}}>
            <form className="form position-absolute start-50 top-50 translate-middle mt-3">
                <hr></hr>
                <h3 style={{textAlign:"center"}}>Sign Up</h3>
                <hr></hr>

                <div className="form-group mt-4">
                    <label>First name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="First name"  
                      name="firstName"
                      onChange={(e) => handleChannge(e)}
                      />
                </div>

                <div className="form-group mt-2">
                    <label>Last name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Last name" 
                      name="lastName"
                      onChange={(e) => handleChannge(e)}
                      />
                </div>

                <div className="form-group mt-2">
                    <label>Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter email" 
                      name="Email"
                      onChange={(e) => handleChannge(e)}
                      />
                </div>

                <div className="form-group mt-2">
                    <label>Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Enter password" 
                      name="Password"
                      onChange={(e) => handleChannge(e)}
                      />
                </div>

                <button onClick={(e) => addDetails(e)} id="button" type="submit" className="btn text-white text-center mt-3 d-grid gap-2 col-6 mx-auto">Submit</button>
                <p className="forgot-password text-right text-center mt-4">
                    Already registered <Link to ="/Login">sign in?</Link>
                </p>
            </form>
            </div>
        );
    }

export default SignUp;