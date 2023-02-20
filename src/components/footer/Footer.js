import React from "react";
import "./Footer.scss";
import NavLogo from "./../../assets/Logo.png";

function Footer() {
  return (
    <>
      <div className="footer px-5  ">
        <div className="container-fluid px-5 ">
          <div className="row  py-4">
            <div className="my-auto text-left col-md-3">
              <a href="#">
                <img
                  src={NavLogo}
                  width="170px"
                  className="rounded img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="my-3 text-center col-md-6">
              <div className="text-center">
                <ul className="nav justify-content-center footer-links">
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" target="_blank">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Trusted by
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="my-3 text-center col-md-3">
              <a className="nav-link" href="#">
                working on it
              </a>
            </div>
          </div>
          <div className="row footer-lower">
            <div className=" col-md-6 py-3 text-left ">
              © 2022 Company name. All rights reserved
            </div>
            <div className=" col-md-6 py-3  text-right">
              hello@dressmeofficial.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
