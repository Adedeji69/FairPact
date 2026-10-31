import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Nav.css";

function NavScrollExample() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Navbar expand="lg" className="fairpact-navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand
          href="#home"
          className="navbar-brand-custom"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="FairPact logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="fairpact-navbar-nav" />

        <Navbar.Collapse id="fairpact-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link onClick={() => scrollToSection("how-it-works")}>
              How it Works
            </Nav.Link>

            <Nav.Link onClick={() => scrollToSection("buyer-protection")}>
              Buyer Protection
            </Nav.Link>

            <Nav.Link onClick={() => scrollToSection("seller-protection")}>
              Seller Protection
            </Nav.Link>

            <Nav.Link onClick={() => scrollToSection("logistics-providers")}>
              For Logistics Providers
            </Nav.Link>

            <Nav.Link onClick={() => scrollToSection("faq")}>
              FAQ
            </Nav.Link>
          </Nav>

          <div className="navbar-actions">
            <Link to="/login" className="navbar-login">
              Log in
            </Link>

            <Button className="navbar-create-btn" >
              Create an Account
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
