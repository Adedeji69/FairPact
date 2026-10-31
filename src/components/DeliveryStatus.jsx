import React from "react";
import "../styles/DeliveryStatus.css";

const DeliveryStatus = () => {
  const steps = [
    {
      label: "Picked up",
      time: "Mar 10, 09:12 AM",
      status: "completed",
    },
    {
      label: "In transit",
      time: "Mar 10, 02:40 PM",
      status: "active",
    },
    {
      label: "Out for delivery",
      time: "Arriving today",
      status: "pending",
    },
  ];

  return (
    <div className="delivery-status-card">
      <div className="delivery-status-header">
        <div className="delivery-status-title">
          <span class="material-symbols-outlined">delivery_truck_speed</span>
          <h3>Delivery Status</h3>
        </div>
      </div>

      <div className="delivery-progress">
        <div className="delivery-progress-line">
          <div className="delivery-progress-filled"></div>
        </div>

        {steps.map((step) => (
          <div className={`delivery-step ${step.status}`} key={step.label}>
            <div className="delivery-step-marker">
              {step.status === "completed" ? (
                <span className="material-symbols-outlined">check</span>
              ) : step.status === "active" ? (
                <span className="delivery-active-dot"></span>
              ) : null}
            </div>

            <div className="delivery-step-info">
              <p className="delivery-step-label">{step.label}</p>
              <span className="delivery-step-time">{step.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="estimated-delivery">
        <span className="material-symbols-outlined">schedule</span>

        <p>
          Estimated delivery:
          <strong> Today, 3:30 PM</strong>
        </p>
      </div>
    </div>
  );
};

export default DeliveryStatus;
