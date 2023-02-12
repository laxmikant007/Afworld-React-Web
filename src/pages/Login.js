import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.css";
import "../assets/css/signin.css";

export default function Login()  {
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
//     <form>
//     <h3>Sign In</h3>

//     <div className="mb-3">
//       <label>Email address</label>
//       <input
//         type="email"
//         className="form-control"
//         placeholder="Enter email"
//       />
//     </div>

//     <div className="mb-3">
//       <label>Password</label>
//       <input
//         type="password"
//         className="form-control"
//         placeholder="Enter password"
//       />
//     </div>

//     <div className="mb-3">
//       <div className="custom-control custom-checkbox">
//         <input
//           type="checkbox"
//           className="custom-control-input"
//           id="customCheck1"
//         />
//         <label className="custom-control-label" htmlFor="customCheck1">
//           Remember me
//         </label>
//       </div>
//     </div>

//     <div className="d-grid">
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </div>
//     <p className="forgot-password text-right">
//       Forgot <a href="#">password?</a>
//     </p>
//   </form>
  );
};

// export default Register;
