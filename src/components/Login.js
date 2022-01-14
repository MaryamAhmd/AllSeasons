import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

//   handleClick = e => {
//     e.preventDefault();

//     alert("Goes to registration page");
//   };

  render() {
    return (
      <div id="image" style={{height:586}} >
        {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
        {/* <form className="form position-absolute start-50 top-50 translate-middle" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Login</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          SignUp
        </button> */}

        <form className="form position-absolute start-50 top-50 translate-middle" onSubmit={this.handleSubmit}>
        <hr></hr>
        <h3 style={{textAlign:"center"}}>Sign In</h3>
        <hr></hr>
  <div className="mb-3 mt-4">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button style={{display:"block"}} id="button" type="submit" className="btn text-white text-center mt-3 d-grid gap-2 col-6 mx-auto">Login</button>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ="/SignUp"><button id="button" type="submit" className="btn text-white text-center mt-5 d-grid gap-2 col-6 mx-auto">SignUp</button></Link>
</form>
      </div>
    );
  }
}

export default Login;