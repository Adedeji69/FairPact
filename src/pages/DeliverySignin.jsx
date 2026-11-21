import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DeliverySignin.css";
import logo from "../assets/logo.png";

const DeliverySignin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery signin submitted");
  };

  return (
    <div className="delSigninPage">
      <div className="delSigninBox">
        <div className="delSigninLeft">
          <div className="delSigninLogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="delSigninLeftTop">
            <h2>Deliver with FairPact.</h2>
            <p>
              Manage delivery requests, update shipment progress and build trust
              with buyers and sellers.
            </p>
          </div>

          <div className="delSigninLeftMiddle">
            <div className="delSigninFeat">
              <div className="delSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  check_circle
                </span>
              </div>
              <div className="delSigninFeatText">
                <h5>Manage Deliveries</h5>
                <p>View and update your assigned deliveries.</p>
              </div>
            </div>

            <div className="delSigninFeat">
              <div className="delSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  trending_up
                </span>
              </div>
              <div className="delSigninFeatText">
                <h5>Verified Escrows</h5>
                <p>Handle deliveries linked to secured transactions.</p>
              </div>
            </div>

            <div className="delSigninFeat">
              <div className="delSigninIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "24px" }}
                >
                  balance
                </span>
              </div>
              <div className="delSigninFeatText">
                <h5>Grow Your Business</h5>
                <p>Build a reliable delivery record.</p>
              </div>
            </div>
          </div>

          <div className="delSigninLeftBottom">
            <h5>FAIRPACT &bull; SECURE TRANSACTIONS, FAIR OUTCOMES</h5>
          </div>
        </div>

        <div className="delSigninRight">
          <div className="delSigninCard">
            <div className="delSigninMobileLogo">
              <img src={logo} alt="logo" />
            </div>

            <div className="delSigninWelcome">
              <h4>Logistics partner sign in</h4>
              <p>Access your logistics dashboard.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="delSigninInputField">
                <label htmlFor="delEmail">Email or phone number</label>
                <input
                  type="text"
                  id="delEmail"
                  placeholder="Enter your email or phone number"
                />
              </div>

              <div className="delSigninInputField">
                <label htmlFor="delPassword">Password</label>
                <div className="delSigninPasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="delPassword"
                    placeholder="Enter your password"
                  />
                  <span
                    className="delSigninEyeIcon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="delSigninRemember">
                <div className="delSigninRememberInputs">
                  <input type="checkbox" id="rememberDel" name="rememberDel" />
                  <label htmlFor="rememberDel">Remember me</label>
                </div>
                <span className="delForgotPassword">Forgot password?</span>
              </div>

              <button type="submit" className="delSigninBtn">
                Sign in
              </button>
            </form>

            <p className="delSigninBottom">
              Don't have an account?{" "}
              <Link
                to="/signup/delivery"
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

export default DeliverySignin;