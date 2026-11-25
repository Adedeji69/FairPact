import React from "react";
import DashboardNav from "../components/DashboardNav";
import { useNavigate } from "react-router-dom";
import shield from "../assets/hero-content-shield.png";
import "../styles/Escrows.css";

const Escrows = () => {
  const navigate = useNavigate();

  return (
    <div className="appLayout">
      <DashboardNav />

      <main className="escrowMain">
        <div className="escrowLayout">
          <div className="escrowHeader">
            <div className="escrowHeaderLeft">
              <p
                className="backToDash"
                onClick={() => navigate("/user/dashboard")}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Dashboard
              </p>
              <h1>Escrows</h1>
              <p className="escrowSubText">
                Manage and track all your escrow transactions.
              </p>
              <button className="newEscrowBtn">+ New Escrow</button>
            </div>

            <div className="escrowBanner">
              <div className="escrowBannerIcon">
                <img src={shield} alt="shield" />
              </div>
              <div className="escrowBannerText">
                <p className="escrowBannerTitle">Your funds are protected.</p>
                <p className="escrowBannerDesc">
                  FairPact holds payment until delivery is confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="escrowStatsGrid">
            <div className="escrowStat">
              <div className="escrowStatIcon">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="escrowStatText">
                <p className="escrowStatLabel">Active Escrows</p>
                <h2 className="escrowStatValue">0</h2>
                <p className="escrowStatSub">In progress</p>
              </div>
            </div>

            <div className="escrowStat">
              <div className="escrowStatIcon">
                <span className="material-symbols-outlined">database</span>
              </div>
              <div className="escrowStatText">
                <p className="escrowStatLabel">Total Value</p>
                <h2 className="escrowStatValue">₦0</h2>
                <p className="escrowStatSub">All time</p>
              </div>
            </div>

            <div className="escrowStat">
              <div className="escrowStatIcon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="escrowStatText">
                <p className="escrowStatLabel">Completed</p>
                <h2 className="escrowStatValue">0</h2>
                <p className="escrowStatSub">0% success rate</p>
              </div>
            </div>

            <div className="escrowStat">
              <div className="escrowStatIcon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="escrowStatText">
                <p className="escrowStatLabel">Pending</p>
                <h2 className="escrowStatValue">0</h2>
                <p className="escrowStatSub">Awaiting action</p>
              </div>
            </div>
          </div>

          <div className="emptyState">
            <span className="material-symbols-outlined">description</span>
            <h5>No escrows yet</h5>
            <p>Create your first escrow to get started.</p>
            <button className="newEscrowBtn">+ New Escrow</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Escrows;
