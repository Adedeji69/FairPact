import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminSignin.css";
import logo from "../assets/logo.png";

const AdminSignin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin signin submitted");
  };

  return (
    <div className="adminSigninPage">
      <div className="adminSigninBox">
        <div className="adminSigninLeft">
          <div className="adminSigninLogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="adminSigninLeftTop">
            <p className="adminLabel">Admin Portal</p>

            <h2>Platform administration.</h2>
            <p>
              Oversee users, escrows, logistics, transactions and dispute
              resolution from one workspace.
            </p>
          </div>

          <div className="adminSigninLeftMiddle">
            <div className="adminSigninFeat">
              <div className="adminSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  manage_accounts
                </span>
              </div>
              <div className="adminSigninFeatText">
                <h5>Manage Users</h5>
                <p>Review buyer, seller and logistics accounts.</p>
              </div>
            </div>

            <div className="adminSigninFeat">
              <div className="adminSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  trending_up
                </span>
              </div>
              <div className="adminSigninFeatText">
                <h5>Monitor Escrows</h5>
                <p>Oversee transactions and delivery progress.</p>
              </div>
            </div>

            <div className="adminSigninFeat">
              <div className="adminSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  balance
                </span>
              </div>
              <div className="adminSigninFeatText">
                <h5>Resolve Disputes</h5>
                <p>Review evidence and make fair decisions.</p>
              </div>
            </div>
          </div>

          <div className="adminSigninLeftBottom">
            <h5>FAIRPACT &bull; SECURE TRANSACTIONS, FAIR OUTCOMES</h5>
          </div>
        </div>

        <div className="adminSigninRight">
          

          <div className="adminSigninCard">

            <div className="adminSigninMobileLogo">
            <img src={logo} alt="logo" />
          </div>
          
            <div className="adminSigninWelcome">
              <h4>Admin sign in</h4>
              <p>Access the FairPact administration workspace.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="adminSigninInputField">
                <label htmlFor="adminEmail">Work email</label>
                <input
                  type="email"
                  id="adminEmail"
                  placeholder="Enter your admin email"
                />
              </div>

              <div className="adminSigninInputField">
                <label htmlFor="adminPassword">Password</label>
                <div className="adminSigninPasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="adminPassword"
                    placeholder="Enter your password"
                  />
                  <span
                    className="adminSigninEyeIcon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="adminSigninRemember">
                <div className="adminSigninRememberInputs">
                  <input
                    type="checkbox"
                    id="rememberAdmin"
                    name="rememberAdmin"
                  />
                  <label htmlFor="rememberAdmin">Remember me</label>
                </div>
                <span className="adminForgotPassword">Forgot password?</span>
              </div>

              <button type="submit" className="adminSigninBtn">
                Sign in
              </button>
            </form>

            <p className="adminSigninBottom">
              Don't have an account?{" "}
              <Link
                to="/admin/signup"
                style={{ textDecoration: "none", color: "#0F5948" }}
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;