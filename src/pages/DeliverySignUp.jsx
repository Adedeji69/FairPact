import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DeliverySignUp.css";
import logo from "../assets/logo.png";

const DeliverySignUp = () => {
  const [partnerType, setPartnerType] = useState("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery form submitted");
  };

  return (
    <div className="deliverySignupPage">
      <div className="deliverySignupBox">
        <div className="deliveryLeft">
          <div className="deliveryLogo">
            <img src={logo} alt="logo" />
          </div>

          <p className="deliveryPortalLabel">Logistics Partner</p>

          <div className="deliveryLeftTop">
            <h2>Become a Fair<span style={{color: '#0F5948'}}>Pact</span> Delivery Partner</h2>
            <p>
              Register as an individual rider or courier company and manage deliveries for fairPact escrow.
            </p>
          </div>

          <div className="deliveryLeftMiddle">
            <div className="deliveryFeat">
              <div className="deliveryIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "30px" }}
                >
                  delivery_truck_speed
                </span>
              </div>
              <div className="deliveryFeatText">
                <h5>Flexible Opportunities</h5>
                <p>Take delivery jobs in your service areas.</p>
              </div>
            </div>

            <div className="deliveryFeat">
              <div className="deliveryIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "30px" }}
                >
                  verified
                </span>
              </div>
              <div className="deliveryFeatText">
                <h5>Verified & Trusted</h5>
                <p>Get verified and build your reputation.</p>
              </div>
            </div>

            <div className="deliveryFeat">
              <div className="deliveryIcon">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#0f6e56", fontSize: "30px" }}
                >
                  payments
                </span>
              </div>
              <div className="deliveryFeatText">
                <h5>Timely Earnings</h5>
                <p>Get paid for completed deliveries, on time.</p>
              </div>
            </div>
          </div>

          <div className="deliveryLeftBottom">
            <h5>FAIRPACT &bull; SECURE TRANSACTION, FAIR OUTCOMES</h5>
          </div>
        </div>

        <div className="deliveryRight">
          <div className="deliveryCard">
            <div className="deliveryMobileLogo">
              <img src={logo} alt="logo" />
            </div>

            <div className="deliverySignupText">
              <h2>Create Logistics Account</h2>
              <p>Set up your logistics partner account.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="deliveryInputField">
                <label>Partner Type</label>
                <div className="partnerTypeWrapper">
                  <div
                    className={`partnerTypeCard ${partnerType === "individual" ? "activePartner" : ""}`}
                    onClick={() => setPartnerType("individual")}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px", color: "#0f6e56" }}
                    >
                      directions_bike
                    </span>
                    <div>
                      <p className="partnerTypeTitle">Individual Rider</p>
                      <p className="partnerTypeDesc">I deliver orders personally</p>
                    </div>
                  </div>

                  <div
                    className={`partnerTypeCard ${partnerType === "company" ? "activePartner" : ""}`}
                    onClick={() => setPartnerType("company")}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px", color: "#0f6e56" }}
                    >
                      business
                    </span>
                    <div>
                      <p className="partnerTypeTitle">Logistics Company</p>
                      <p className="partnerTypeDesc">I represent a logistics business</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="deliveryInputField">
                <label htmlFor="fullName">Full Name</label>
                <div className="deliveryInputWrapper">
                  <span className="material-symbols-outlined deliveryInputIcon">
                    person
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="deliveryInputField">
                <label htmlFor="email">Email Address</label>
                <div className="deliveryInputWrapper">
                  <span className="material-symbols-outlined deliveryInputIcon">
                    mail
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="deliveryInputField">
                <label htmlFor="phone">Phone Number</label>
                <div className="deliveryPhoneWrapper">
                  
                  <input
                    type="number"
                    id="phone"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="deliveryFormRow">
                <div className="deliveryInputField">
                  <label htmlFor="state">State</label>
                  <div className="deliveryInputWrapper">
                    <span className="material-symbols-outlined deliveryInputIcon">
                      location_on
                    </span>
                    <select id="state">
                      <option value="">Select your state</option>
                      <option value="abia">Abia</option>
                      <option value="adamawa">Adamawa</option>
                      <option value="akwa-ibom">Akwa Ibom</option>
                      <option value="anambra">Anambra</option>
                      <option value="bauchi">Bauchi</option>
                      <option value="bayelsa">Bayelsa</option>
                      <option value="benue">Benue</option>
                      <option value="borno">Borno</option>
                      <option value="cross-river">Cross River</option>
                      <option value="delta">Delta</option>
                      <option value="ebonyi">Ebonyi</option>
                      <option value="edo">Edo</option>
                      <option value="ekiti">Ekiti</option>
                      <option value="enugu">Enugu</option>
                      <option value="gombe">Gombe</option>
                      <option value="imo">Imo</option>
                      <option value="jigawa">Jigawa</option>
                      <option value="kaduna">Kaduna</option>
                      <option value="kano">Kano</option>
                      <option value="katsina">Katsina</option>
                      <option value="kebbi">Kebbi</option>
                      <option value="kogi">Kogi</option>
                      <option value="kwara">Kwara</option>
                      <option value="lagos">Lagos</option>
                      <option value="nasarawa">Nasarawa</option>
                      <option value="niger">Niger</option>
                      <option value="ogun">Ogun</option>
                      <option value="ondo">Ondo</option>
                      <option value="osun">Osun</option>
                      <option value="oyo">Oyo</option>
                      <option value="plateau">Plateau</option>
                      <option value="rivers">Rivers</option>
                      <option value="sokoto">Sokoto</option>
                      <option value="taraba">Taraba</option>
                      <option value="yobe">Yobe</option>
                      <option value="zamfara">Zamfara</option>
                      <option value="fct">FCT Abuja</option>
                    </select>
                  </div>
                </div>

                <div className="deliveryInputField">
                  <label htmlFor="city">City</label>
                  <div className="deliveryInputWrapper">
                    <span className="material-symbols-outlined deliveryInputIcon">
                      location_city
                    </span>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </div>

              <div className="deliveryInputField">
                <label htmlFor="password">Password</label>
                <div className="deliveryPasswordWrapper">
                  <span className="material-symbols-outlined deliveryInputIcon">
                    lock
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create a password (Min 6)"
                  />
                  <span
                    className="deliveryEyeIcon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <div className="deliveryInputField">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="deliveryPasswordWrapper">
                  <span className="material-symbols-outlined deliveryInputIcon">
                    lock
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <span
                    className="deliveryEyeIcon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </span>
                </div>
              </div>

              <button type="submit" className="deliverySignupBtn">
                Create Account
              </button>
            </form>

            <p className="deliverySignupBottom">
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

export default DeliverySignUp;