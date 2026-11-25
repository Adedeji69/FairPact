import React from "react";
import DashboardNav from "../components/DashboardNav";
import { useNavigate } from "react-router-dom";
import shield from "../assets/hero-content-shield.png";
import "../styles/Disputes.css";

const Disputes = () => {
  const navigate = useNavigate();

  return (
    <div className="appLayout">
      <DashboardNav />

      <main className="disputeMain">
        <div className="disputeLayout">
          <div className="disputeHeader">
            <div className="disputeHeaderLeft">
              <p
                className="backToDash"
                onClick={() => navigate("/user/dashboard")}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Dashboard
              </p>
              <h1>Disputes</h1>
              <p className="disputeSubText">
                Track and manage your escrow disputes.
              </p>
              <button className="raiseDisputeBtn">Raise a Dispute</button>
            </div>

            <div className="disputeBanner">
              <div className="disputeBannerIcon">
                <img src={shield} alt="shield" />
              </div>
              <div className="disputeBannerText">
                <p className="disputeBannerTitle">Fair dispute resolution.</p>
                <p className="disputeBannerDesc">
                  Every dispute is reviewed fairly by the FairPact team.
                </p>
              </div>
            </div>
          </div>

          <div className="disputeStatsGrid">
            <div className="disputeStat">
              <div className="disputeStatIcon">
                <span className="material-symbols-outlined">error</span>
              </div>
              <div className="disputeStatText">
                <p className="disputeStatLabel">Total Disputes</p>
                <h2 className="disputeStatValue">0</h2>
                <p className="disputeStatSub">All time</p>
              </div>
            </div>

            <div className="disputeStat">
              <div className="disputeStatIcon">
                <span className="material-symbols-outlined">lock_open</span>
              </div>
              <div className="disputeStatText">
                <p className="disputeStatLabel">Open</p>
                <h2 className="disputeStatValue">0</h2>
                <p className="disputeStatSub">Active disputes</p>
              </div>
            </div>

            <div className="disputeStat">
              <div className="disputeStatIcon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="disputeStatText">
                <p className="disputeStatLabel">Pending Review</p>
                <h2 className="disputeStatValue">0</h2>
                <p className="disputeStatSub">Under review</p>
              </div>
            </div>

            <div className="disputeStat">
              <div className="disputeStatIcon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="disputeStatText">
                <p className="disputeStatLabel">Resolved</p>
                <h2 className="disputeStatValue">0</h2>
                <p className="disputeStatSub">All time</p>
              </div>
            </div>
          </div>

          <div className="emptyState">
            <span className="material-symbols-outlined">balance</span>
            <h5>No disputes yet</h5>
            <p>Any disputes you raise will appear here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disputes;
