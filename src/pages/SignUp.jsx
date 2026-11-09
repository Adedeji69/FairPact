import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import logo from "../assets/logo.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="signupPage">
      <div className="signupBox">
        <div className="signupLeft">
          <div className="fairpactLogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="signupLeftTop">
            <h2>A safer way to buy and sell online.</h2>
            <p>
              Create your account to use secure escrow payments, real time
              delivery tracking, fair dispute resolution.
            </p>
          </div>

          <div className="signupLeftMiddle">
            <div className="signupFeat">
              <div className="signupIcon">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "35px" }}
                >
                  shopping_bag_speed
                </span>
              </div>

              <div className="signupFeatText">
                <h5>Buyer Protection</h5>
                <p>Shop with confidence while funds stay secure.</p>
              </div>
            </div>

            <div className="signupFeat">
              <div className="signupIcon">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "35px" }}
                >
                  sell
                </span>
              </div>

              <div className="signupFeatText">
                <h5>Seller Protection</h5>
                <p>Recieve payment once delivery is confirmed.</p>
              </div>
            </div>

            <div className="signupFeat">
              <div className="signupIcon">
                <span
                  class="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "35px" }}
                >
                  delivery_truck_speed
                </span>
              </div>

              <div className="signupFeatText">
                <h5>Tracked Delivery</h5>
                <p>Follow delivery progress from pickup to handover.</p>
              </div>
            </div>
          </div>

          <div className="signupLeftBottom">
            <h5>FAIRPACT &bull; SECURE TRANSACTION, FAIR OUTCOMES</h5>
          </div>
        </div>

        <div className="signupRight">
          <div className="signupCard">
            <div className="signupLogo">
              <img src={logo} alt="logo" />
            </div>

            <div className="signupText">
              <h2>Create your account</h2>
              <p>Join fairPact today to buy and sell with confidence.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="userInputField">
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" placeholder="Enter First Name" />
</div>

<div className="userInputField">
    <label htmlFor="lastName">Last Name</label>
    <input type="text" id="lastName" placeholder="Enter Last Name" />
</div>

              <div className="userInputField">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>

              <div className="userInputField">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              <div className="userInputField">
                <label htmlFor="password">Password</label>
                <div className="userPasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <span
                    className="userEyeIcon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="userInputField">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="userPasswordWrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm Your Password"
                  />
                  <span
                    className="userEyeIcon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <button type="submit" className="userSignupBtn">
                Create Account
              </button>
            </form>

            <p className="userSignupBottom">
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

export default SignUp;
