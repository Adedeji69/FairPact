import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../assets/logo.png";
import "../styles/DashboardNav.css";
import userAvatar from "../assets/avatar.png";
import { useNavigate, useLocation } from "react-router-dom";

const PartnerNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/partner/dashboard" },
    { name: "Deliveries", path: "/partner/deliveries" },
    { name: "Earnings", path: "/partner/earnings" },
    { name: "Profile", path: "/partner/profile" },
  ];

  return (
    <Navbar expand="lg" className="dashNav">
      <Container fluid className="dashNavContainer">

        <div className="dashLogo">
          <img src={logo} alt="FairPact Logo" />
        </div>

        <div className="navBell2">
          <span className="material-symbols-outlined">notifications</span>
          <span className="bellBadge">0</span>
        </div>

        <Navbar.Toggle aria-controls="dashNavScroll" />

        <Navbar.Collapse id="dashNavScroll">
          <Nav className="dashNavLinks me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                className={`dashNavLink ${location.pathname === item.path ? "activeLink" : ""}`}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Nav.Link>
            ))}

            {/* <Nav.Link href="#" className="dashNavLink d-lg-none">Profile</Nav.Link> */}
            <Nav.Link href="#" className="dashNavLink d-lg-none">Settings</Nav.Link>
            <Nav.Link href="#" className="dashNavLink d-lg-none logoutLink">Log Out</Nav.Link>
          </Nav>

          <div className="dashNavRight">
            <div className="navBell">
              <span className="material-symbols-outlined">notifications</span>
              <span className="bellBadge">0</span>
            </div>

            <Dropdown align="end" className="d-none d-lg-block">
              <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
                <div className="avatarWrapper">
                  <img src={userAvatar} alt="user" className="avatarImg" />
                  <span className="avatarName">Partner</span>
                  <span className="material-symbols-outlined avatarChevron">
                    expand_more
                  </span>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/partner/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/profile/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="mobileAvatar d-lg-none">
              <img src={userAvatar} alt="user" className="avatarImg" />
              <span className="avatarName">Partner</span>
            </div>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default PartnerNav;