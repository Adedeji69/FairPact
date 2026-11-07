import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signin.css";
import logo from "../assets/logo.png";
import shield from "../assets/hero-content-shield.png";

const Signin = () => {
  return (
    <div className="signinPage">
      <div className="box">
        <div className="left">
          <div className="fairpactLogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="leftTop">
            <h2>
              Access Your Fair<span>Pact</span> Account
            </h2>
            <p>
              Manage escrows, track deliveries, and resolve disputes securely in
              one place.
            </p>
          </div>

          <div className="leftMiddle">
            <div className="feat">
              <div className="icon">
                <img src={shield} alt="" />
              </div>

              <div className="featText">
                <h5>Escrow protection</h5>
                <p>Your money is held safely until delivery is confirmed.</p>
              </div>
            </div>

            <div className="feat">
              <div className="icon">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "35px" }}
                >
                  delivery_truck_speed
                </span>
              </div>

              <div className="featText">
                <h5>Tracked Delivery</h5>
                <p>Track items from pickup to delivery.</p>
              </div>
            </div>

            <div className="feat">
              <div className="icon">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "35px" }}
                >
                  balance
                </span>
              </div>

              <div className="featText">
                <h5>Fair Dispute Resolution</h5>
                <p>Get a fair review when issues arises.</p>
              </div>
            </div>
          </div>

          <div className="leftBottom">
            <h5>FAIRPACT &bull; SECURE TRANSACTION, FAIR OUTCOMES</h5>
          </div>
        </div>
        <div className="right">
          

          <div className="signinBox">

            <div className="mobileLogo">
            <img src={logo} alt="logo" />
          </div>

            <div className="welcomeText">
              <h4>Welcome Back</h4>
              <p>Sign in to your fairPact account.</p>
            </div>

            <div className="signinInputs">
              <div className="inputsField">
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>

              <div className="inputsField">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Your Password" />
              </div>
            </div>

            <div className="remember">
              <div className="rememberInputs">
                <input type="checkbox" name="rememberUser" id="rememberUser" />
                <label htmlFor="rememberUser" style={{fontSize: '14px'}}>Remember me</label>
              </div>

              <p>Forgot password?</p>
            </div>

            <button className="signinBtn">Sign In</button>

            <p className="signinBottom">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#0F5948" }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
