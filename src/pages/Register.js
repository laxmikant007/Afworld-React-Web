import React from 'react'
import { Link } from "react-router-dom";
import signupImage from "../assets/images/sign-up.jpg"
import "../assets/css/register.css";

export default function Register() {
  return (
    <div className='container' >
     <div className='section'>
      <div class="screen-1">
        <div class="input_box">
          <label for="name">Full Name</label>
          <div class="sec-2">
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" name="name" placeholder="Enter Your name" />
          </div>
        </div>
        <div class="input_box">
          <label for="email">Email Address</label>
          <div class="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="email" placeholder="Username@gmail.com" />
          </div>
        </div>
        <div class="input_box">
          <label for="number">Mobile number</label>
          <div class="sec-2">
            <ion-icon name="call-outline"></ion-icon>
            <input type="email" name="email" placeholder="+ 91-000-0000-000" />
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
        <button class="login">Sign Up</button>
        <div class="footer">
          Already have account? <Link to="/login" className="links_btn">Login</Link>
        </div>
      </div>


    </div>
          <div class="image-container">
          <img src={signupImage} alt="Image" style={{ maxWidth: "100%", height: "auto" , width:"40vh" }}/>
          </div>


    
    </div>
  )
}
