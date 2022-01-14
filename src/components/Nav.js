import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pic from '../images/logo2.png';
class NavBar  extends React.Component {
    render() { 
        return( 
        <div id="navcolor">
            <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a id = "name" className="navbar-brand ms-sm-2 ms-md-2 ms-lg-5 ms-xl-4 ms-xxl-5 text-white" href="#"> <img src={pic} style={{width:30},{height:30}} alt="" class="d-inline-block align-text-top"/>All Seasons - Fresh and Healthy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/"><a id = "name2" className="nav-link active ms-sm-2 ms-md-2 ms-lg-5 ms-xl-5 ms-xxl-5 text-white" aria-current="page" href="#">Home</a></Link>
              </li>
              <li className="nav-item">
                <a id = "name2" className="nav-link ms-sm-2 ms-md-2 ms-lg-5 ms-xl-4 ms-xxl-5 text-white" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-4 text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/Fruits"><li><a className="dropdown-item" href="#">Fruits</a></li></Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/Vegetables"><li><a className="dropdown-item" href="#">Vegetables</a></li></Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/DryFruits"><li><a className="dropdown-item" href="#">Dry Fruits</a></li></Link>
          </ul>
        </li>
        <li className="nav-item">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/Cart"> <a id = "name2" className="nav-link ms-sm-2 ms-md-2 ms-lg-5 ms-xl-4 ms-xxl-5 text-white" href="#">Cart</a></Link>
              </li>
            </ul>
            <form class="d-flex">
              <input style={{width:300}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button style={{backgroundColor:'green'}} className="btn btn-dark btn-sm btn-outline-success text-white" type="submit">Search</button>
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/Login"><button style={{backgroundColor:'green'}} className="btn btn-dark btn-outline-success ms-2 text-white" type="submit">Login</button></Link>
              {/* <button style={{backgroundColor:'green'}} className="btn btn-dark btn-sm btn-outline-success ms-2 text-white" type="submit">SignUp</button> */}
            </form>
          </div>
        </div>
      </nav>
</div>
        );
    }
}
 
export default NavBar ;