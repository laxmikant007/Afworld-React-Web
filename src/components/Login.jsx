import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.css";

const Register = () => {
  return (
    <div className="section">
      <div class="screen-1">
        <div class="input_box">
          <label for="email">Email Address</label>
          <div class="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="email" placeholder="Username@gmail.com" />
          </div>
        </div>
        <div class="input_box">
          <label for="password">Password</label>
          <div class="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              class="pas"
              type="password"
              name="password"
              placeholder="············"
            />
          </div>
        </div>
         <button class="login"><Link to="/profile" className="link_btn">Login</Link> </button>
        <div class="footer">
          <Link to="/register" className="links_btn">Sign up</Link>
          <Link className="links_btn">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
