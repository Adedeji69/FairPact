
import React from "react";
import "../styles/EscrowCard.css";
import shoe from "../assets/sneaker.png"
import logo from "../assets/logo.png";


const EscrowCard = () => {
  const steps = [
    { label: "Payment confirmed", completed: true },
    { label: "Seller shipped", completed: true },
    { label: "In transit", completed: true },
    { label: "Out for delivery", completed: false },
  ];

  return (
    <div className="escrow-card">
      <div className="escrow-header">
        <div className="escrow-brand">
          <img src={logo} alt="fairPact"  />
        </div>

        <button className="escrow-close" aria-label="Close">
          ×
        </button>
      </div>

      <div className="escrow-status-row">
        <span className="material-symbols-outlined back-arrow">
          arrow_back
        </span>
        <span className="payment-status">Payment secured</span>
      </div>

      <div className="escrow-summary">
        <p className="escrow-id">Escrow #FP-10482</p>
        <h2>₦136,500</h2>
      </div>

      <div className="escrow-product">
        <div className="product-image">
          <img src={shoe} alt="item" />
        </div>

        <div className="product-details">
          <h3>ASICS</h3>
          <p>GEL-STRATUS MC sneakers</p>
          <p>Qty: 1 <span>•</span> ₦136,500</p>
        </div>
      </div>

      <div className="delivery-timeline">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div
              className={`timeline-step ${step.completed ? "completed" : "current"}`}
              key={step.label}
            >
              <div className="timeline-marker">
                {step.completed ? (
                  <span className="material-symbols-outlined">check</span>
                ) : null}
              </div>

              <div className={`timeline-label ${isLast ? "current-label" : ""}`}>
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EscrowCard;
