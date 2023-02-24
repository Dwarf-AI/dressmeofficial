import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import NavLogo from "./../../assets/Logo.png";

function Navbar(props) {
  const scrollToWhyus = () => {
    const whyus = document.getElementById("whyus");
    whyus.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToTrustby = () => {
    const trustus = document.getElementById("trustus");
    trustus.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-main">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="navLogo" src={NavLogo} alt="" />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item active">
                <Link className="nav-link" to={props.navbar.firstNavLink}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={scrollToWhyus}>
                  Why Us
                </Link>
              </li>
              <li className="nav-link" onClick={scrollToTrustby}>
                Trusted By
              </li>
              <li className="nav-link" to={props.navbar.fourthNavLink}>
                FAQs
              </li>
              {/* <li className="nav-link" onClick={scrollToProjects}>
                <span className="nav-link">Projects</span>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
