import React, { useState } from "react";
import "../styles/Homepage.css";
import shield from "../assets/hero-content-shield.png";
import truck from "../assets/hero-content-shield2.png";
import shieldCheck from "../assets/hero-content-truck.png";
import deliveryMan from "../assets/deliveryman.png";
import dispatchRider from "../assets/dispatchrider.png";
import logos from "../assets/logo2.png";
import footerImg from "../assets/footerImg.png";
import FB from "../assets/fb.png";
import IG from "../assets/IG.png";
import IN from "../assets/Linkedin.png";
import X from "../assets/x.png";
import EscrowCard from "../components/EscrowCard";
import protect from "../assets/hero-purchase.png";
import protect2 from "../assets/hero-purchase2.png";
import DeliveryStatus from "../components/DeliveryStatus";
import NavScrollExample from "../components/Nav";
import { Link } from 'react-router-dom';

const Homepage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="nav">
        <NavScrollExample />
      </div>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <span className="hero-eyebrow">
              ESCROW · LOGISTICS · DISPUTE RESOLUTION
            </span>

            <h1>
              A safer way to <span>buy and sell</span> online.
            </h1>

            <p>
              FairPact protects buyers and sellers with secure escrow payments,
              trusted logistics and a fair dispute resolution process. Shop and
              sell with confidence.
            </p>

            <div className="hero-buttons">
              <button>Create an Account →</button>
              <a href="#how-it-works">How it works</a>
            </div>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <img src={shield} alt="Secure payments" />

              <div>
                <h4>Secure Payments</h4>
                <p>Your money is protected</p>
              </div>
            </div>

            <div className="hero-feature track">
              <img src={truck} alt="Tracked delivery" />

              <div>
                <h4>Tracked Delivery</h4>
                <p>Real-time logistics updates</p>
              </div>
            </div>

            <div className="hero-feature fair">
              <img src={shieldCheck} alt="Fair resolution" />

              <div>
                <h4>Fair Resolution</h4>
                <p>Expert dispute support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <EscrowCard />
          <DeliveryStatus />
          <div className="hero-right-protect">
            <img src={protect} alt="" />
          </div>
          <div className="hero-right-protect2">
            <img src={protect2} alt="" />
          </div>
        </div>
      </section>

      <section className="process" id="how-it-works">
        <div className="process-header">
          <span>THE PROCESS</span>
          <h2>How FairPact Works</h2>
          <p>A simple, secure process from agreement to delivery.</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="process-icon">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div className="process-text">
              <h3>1. Create Escrow</h3>
              <p>
                Set the terms, add items <br /> and delivery details.
              </p>

              <p className="process-duplicate">
                {" "}
                Set the terms, add items and delivery details.{" "}
              </p>
            </div>
          </div>

          <div className="process-arrow">
            <span class="material-symbols-outlined arr">
              line_end_arrow_notch
            </span>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <span class="material-symbols-outlined">credit_card</span>
            </div>
            <div className="process-text">
              <h3>2. Pay</h3>
              <p>
                Your payment is held
                <br />
                securely in escrow.
              </p>

              <p className="process-duplicate">
                {" "}
                Your payment is held securely in escrow.{" "}
              </p>
            </div>
          </div>

          <div className="process-arrow">
            <span class="material-symbols-outlined arr">
              line_end_arrow_notch
            </span>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <span class="material-symbols-outlined">
                delivery_truck_speed
              </span>
            </div>

            <div className="process-text">
              <h3>3. Ship</h3>
              <p>
                Seller ships and logistics <br /> handles the delivery.
              </p>

              <p className="process-duplicate">
                {" "}
                Seller ships and logistics <br /> handles the delivery.{" "}
              </p>
            </div>
          </div>

          <div className="process-arrow">
            <span class="material-symbols-outlined arr">
              line_end_arrow_notch
            </span>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <span class="material-symbols-outlined">package_2</span>
            </div>

            <div className="process-text">
              <h3>4. Deliver</h3>
              <p>
                Track your package <br /> in real time.
              </p>

              <p className="process-duplicate">
                {" "}
                Track your package <br /> in real time.{" "}
              </p>
            </div>
          </div>

          <div className="process-arrow">
            <span class="material-symbols-outlined arr">
              line_end_arrow_notch
            </span>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <span class="material-symbols-outlined">check_circle</span>
            </div>
            <div className="process-text">
              <h3>5. Confirm</h3>
              <p>
                Release funds or open <br /> a dispute if needed.
              </p>

              <p className="process-duplicate">
                {" "}
                Release funds or open <br /> a dispute if needed.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="logistic">
        <div className="logistic-image">
          <img src={deliveryMan} alt="Delivery man carrying a package" />

          <div className="trust-badge">
            <span className="material-symbols-outlined shield">
              verified_user
            </span>
            <p>
              Trusted by thousands <br /> across Nigeria
            </p>
          </div>
        </div>

        <div className="protect">
          <div className="protection-card" id="buyer-protection">
            <div className="protection-icon">
              <span className="material-symbols-outlined">person</span>
            </div>

            <h2>Buyer Protection</h2>
            <h4>Shop with confidence</h4>

            <ul>
              <li>Your payment is secured in escrow</li>
              <li>Get exactly what you ordered</li>
              <li>Track your delivery in real time</li>
              <li>Access fair dispute resolution</li>
            </ul>

            <a href="#buyer-protection">
              Learn more <span>→</span>
            </a>
          </div>

          <div className="protection-card seller-card" id="seller-protection">
            <div className="protection-icon">
              <span className="material-symbols-outlined">storefront</span>
            </div>

            <h2>Seller Protection</h2>
            <h4>Sell with confidence</h4>

            <ul>
              <li>Get paid only after delivery</li>
              <li>Reduced risk of fraud and chargebacks</li>
              <li>Clear transaction records</li>
              <li>Support when issues arise</li>
            </ul>

            <a href="#seller-protection">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="logistics" id="logistics-providers">
        <div className="logistic-content">
          <span className="section-label">INTEGRATED LOGISTICS</span>
          <h2>Reliable delivery, every time.</h2>

          <p>
            FairPact connects you with trusted individual riders and logistics
            companies to move your items safely across cities and states.
          </p>

          <button className="logistic-btn">
            Become a Logistics Provider <span>→</span>
          </button>
        </div>

        <div className="logistic-services">
          <div className="logistic-service">
            <span className="service-icon material-symbols-outlined">
              person
            </span>
            <div>
              <h4>Individual Riders</h4>
              <p>Flexible and fast delivery</p>
            </div>
          </div>

          <div className="logistic-service">
            <span className="service-icon material-symbols-outlined">
              delivery_truck_speed
            </span>
            <div>
              <h4>Logistics Companies</h4>
              <p>Scale for bigger orders</p>
            </div>
          </div>

          <div className="logistic-service">
            <span className="service-icon cross">♢</span>
            <div>
              <h4>Cross-state Delivery</h4>
              <p>Nationwide coverage</p>
            </div>
          </div>

          <div className="logistic-service">
            <span className="service-icon material-symbols-outlined">
              {" "}
              package_2{" "}
            </span>
            <div>
              <h4>Multiple Handoffs</h4>
              <p>Complete delivery chain</p>
            </div>
          </div>
        </div>

        <div className="logisticsimage">
          <img
            src={dispatchRider}
            alt="FairPact delivery rider tracking a shipment"
          />
        </div>
      </section>

      <section className="marketplace-banner">
        <div className="banner-logo">
          <img src={logos} alt="FairPact logo" />

          <div className="banner-text">
            <h2>Join a safer marketplace.</h2>
            <p>
              Whether you're buying, selling or delivering — FairPact is here
              <br className="desktop-break" />
              to make your transactions safer, simpler and fairer.
            </p>
          </div>
        </div>

        <div className="banner-action">
          <button>Create your account →</button>
          <span>
            Already have an account? <Link to="/login">Log in</Link>
          </span>
        </div>
      </section>

      <footer>
        <div className="footer-one">
          <img src={footerImg} alt="Logo" />
        </div>
        <div className="footer-two">
          <h4 className="footer-h4">Quick Links</h4>
          <ul>
            <li> How it Works </li>
            <li> Buyer Protection </li>
            <li onClick={() => scrollToSection("seller-protection")}>
              {" "}
              Seller Protection{" "}
            </li>
            <li onClick={() => scrollToSection("logistics-providers")}>
              {" "}
              For Logistics Providers{" "}
            </li>
            <li> FAQ </li>
          </ul>
        </div>
        <div className="footer-three">
          <h4 className="footer-h4">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-four">
          <h4 className="footer-h4">Stay Hidden</h4>
          <p>Get the latest updates and news from fairPact.</p>
          <input type="text" placeholder="Enter your email address" />
          <button>
            {" "}
            <span>→</span>{" "}
          </button>
          <div className="socials">
            <span className="social-link">
              <img src={X} alt="twitter-icon" />
            </span>

            <span className="social-link">
              <img src={FB} alt="facebook-icon" />
            </span>

            <span className="social-link">
              <img src={IG} alt="instagram-icon" />
            </span>

            <span className="social-link">
              <img src={IN} alt="linkedin-icon" />
            </span>
          </div>
        </div>
      </footer>

      <div className="bottom">
        <hr />

        <div className="bottom-sides">
          <div className="bottom-left">
            <p>© 2026 fairPact. All rights reserved.</p>
          </div>
          <div className="bottom-right">
            <p> A safer way to buy and sell online.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
