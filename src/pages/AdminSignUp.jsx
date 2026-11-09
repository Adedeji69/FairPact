import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminSignUp.css";
import logo from "../assets/logo.png";

const AdminSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin form submitted");
  };

  return (
    <div className="adminSignupPage">
      <div className="adminSignupBox">


        <div className="adminSignupLeft">
    <div className="adminLogo">
        <img src={logo} alt="logo" />
    </div>

    <div className="adminLeftTop">
        <p className="adminPortalLabel">Admin Portal</p>
        <h2>Create Admin Account</h2>
        <div className="adminInvitationBadge">
            <span className="material-symbols-outlined" style={{color: '#D85A30', fontWeight: '900'}}>lock</span>
            Invitation Only
        </div>
        <p className="adminLeftDesc">
            Create an admin account using a valid invitation code from FairPact.
        </p>
    </div>

    <div className="adminLeftMiddle">
        <div className="adminFeat">
            <div className="adminIcon">
                <span className="material-symbols-outlined" style={{ color: "#0f6e56", fontSize: "30px" }}>
                    key
                </span>
            </div>
            <div className="adminFeatText">
                <h5>Role-Based Access</h5>
                <p>Get the right permissions for your responsibilities.</p>
            </div>
        </div>

        <div className="adminFeat">
            <div className="adminIcon">
                <span className="material-symbols-outlined" style={{ color: "#0f6e56", fontSize: "30px" }}>
                    monitoring
                </span>
            </div>
            <div className="adminFeatText">
                <h5>Platform Oversight</h5>
                <p>Manage escrow, logistics and user activities.</p>
            </div>
        </div>

        <div className="adminFeat">
            <div className="adminIcon">
                <span className="material-symbols-outlined" style={{ color: "#0f6e56", fontSize: "30px" }}>
                    lock
                </span>
            </div>
            <div className="adminFeatText">
                <h5>Secure & Controlled</h5>
                <p>Invitation-only access to keep the platform secure.</p>
            </div>
        </div>
    </div>

    <div className="adminLeftBottom">
        <h5>FAIRPACT &bull; SECURE TRANSACTION, FAIR OUTCOMES</h5>
    </div>
</div>

        <div className="adminSignupRight">
          <div className="adminSignupCard">
            <div className="adminMobileLogo">
              <img src={logo} alt="logo" />
            </div>

            <div className="adminSignupText">
              <h2>Create Admin Account</h2>
              <p>Fill in your details to get started.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="adminInputField">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Enter First Name" />
              </div>

              <div className="adminInputField">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Enter Last Name" />
              </div>

              <div className="adminInputField">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>

              <div className="adminInputField">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter Your Phone Number" />
              </div>

              <div className="adminFormRow">
                <div className="adminInputField">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" placeholder="Your Age" />
                </div>

                <div className="adminInputField">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="adminInputField">
                <label htmlFor="password">Password</label>
                <div className="adminPasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <span
                    className="adminEyeIcon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="adminInputField">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="adminPasswordWrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm Your Password"
                  />
                  <span
                    className="adminEyeIcon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <button type="submit" className="adminSignupBtn">
                Create Admin Account
              </button>
            </form>

            <p className="adminSignupBottom">
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "#0F5948" }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;