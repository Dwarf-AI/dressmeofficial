import React from "react";
import "./Footer.scss";
import FooterLogo from "./../../assets/Logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mainFooter">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="leftFooterBox">
              <div className="imageBox">
                <img className="footerLogo" src={FooterLogo} alt="" />
              </div>
              <h2>
                We are known for high quality services worldwide. We are simply
                the best you can find.
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 d-flex align-items-center justify-content-center">
            <div className="middleFooterBox"></div>
          </div>
          <div className="col-lg-4 col-md-8 col-12">
            <div className="rightFooterBox">
              <h2>Contact</h2>
              <div className="footerContactBox">
                <div className="footerContact">
                  <div className="text">
                    &works SECTOR - 15A, FIRST FLOOR, NEELAM AJRONDA CHOWK METRO
                    STATION, Faridabad, Haryana 121007
                  </div>
                </div>
                <div className="footerContact">
                  <div className="text">
                    +91 8587836880
                    <br />
                    +91 89508 08939
                  </div>
                </div>
                <div className="footerContact">
                  <div className="text">vaibhav.nandwani@dwarf-ai.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center">
          © Copyright 2022 · Dwarf-AI All rights reserved{" "}
        </h2>
      </div>
    </div>
  );
}

export default Footer;
