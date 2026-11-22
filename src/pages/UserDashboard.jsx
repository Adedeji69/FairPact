import React from "react";
import DashboardNav from "../components/DashboardNav";
import "../styles/Dashboard.css";
import shield from "../assets/hero-content-shield.png";
import YourEscrowTab from "../components/EscrowTabs";

const UserDashboard = () => {
  const time = new Date().getHours();

  console.log(time);

  return (
    <div className="appLayout">
      <DashboardNav />

      <main className="dashboard">
        <div className="dashLayout">
          <div className="greet">
            <div className="dashLeft">
              <p className="greetUser">
                {time < 12
                  ? "Good Morning,"
                  : time < 17
                    ? "Good Afternoon,"
                    : "Good Evening,"}
              </p>
              <h1>User 👋</h1>
              <p className="leftPText">
                Manage your escrow transactions and activities.
              </p>
            </div>

            <div className="dashRight">
              <div className="rightIcon">
                <img src={shield} alt="" />
              </div>
              <div className="rightText">
                <p className="greenText" style={{ color: "#296558" }}>
                  Your transactions are secured.
                </p>
                <p className="pText">
                  FairPact holds your money until delivery is confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="activityGrid">
            <div className="actGrid childA">
              <div className="activityIcon">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h5>Active Escrows</h5>
              <h1>0</h1>
              <div className="viewActivity">
                <p className="viewAct">
                  View{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
            </div>
            <div className="actGrid childB">
              <div className="activityIcon">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h5>Total Value</h5>
              <h1>₦0</h1>
              <div className="viewActivity">
                <p className="viewAct">
                  View{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
            </div>
            <div className="actGrid childC">
              <div className="activityIcon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <h5>Completed This Month</h5>
              <h1>0</h1>
              <div className="viewActivity">
                <p className="viewAct">
                  View{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
            </div>
            <div className="actGrid childD">
              <div className="activityIcon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h5>Pending Transactions</h5>
              <h1>0</h1>
              <div className="viewActivity">
                <p className="viewAct">
                  View{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
            </div>
          </div>

          <div className="quickactions">
            <h5>Quick Actions</h5>

            <div className="actionsGrid">
              <div className="actionGrid childE">
                <div className="actionGridContent">
                  <div className="outterCircle">
                    <div className="actionGridIcon">
                      <span className="material-symbols-outlined" style={{fontSize: "30px"}}>add_2</span>
                    </div>
                  </div>
                  <div className="actionGridText">
                    <p className="actionGridHeader">New Escrow</p>
                    <p className="actionText">Create New Escrow Transaction</p>
                  </div>
                </div>

                <div className="actionArrow">
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </div>
              </div>

              <div className="actionGrid childF">
                <div className="actionGridContent">
                    <div className="actionGridIcons">
                      <span className="material-symbols-outlined" style={{fontSize: "30px", color: "#0f6E56"}}>mail</span>
                    </div>

                  <div className="actionGridText">
                    <p className="actionGridHeader">Invitations</p>
                    <p className="actionText">Review and respond to escrow Invitations</p>
                  </div>
                </div>

                <div className="actionArrow">
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </div>
              </div>

              <div className="actionGrid childG">
                <div className="actionGridContent">
                    <div className="actionGridIcons">
                      <span className="material-symbols-outlined" style={{fontSize: "30px", color: "#0f6E56"}}>delivery_truck_speed</span>
                    </div>
                  
                  <div className="actionGridText">
                    <p className="actionGridHeader">Track Delivery</p>
                    <p className="actionText">Monitor your shipments in real time.</p>
                  </div>
                </div>

                <div className="actionArrow">
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashRight dashRightBottom">
            <div className="rightIcon">
              <img src={shield} alt="" />
            </div>
            <div className="rightText">
              <p className="greenText" style={{ color: "#296558" }}>
                Your transactions are secured.
              </p>
              <p className="pText">
                FairPact holds your money until delivery is confirmed.
              </p>
            </div>
          </div>

          <div className="yourEscrows">
            <YourEscrowTab />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
