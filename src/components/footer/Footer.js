import React from "react";
import "./Footer.scss";
import GithubIcon from "./../../resources/images/githubIcon.png";
import LinkedinIcon from "./../../resources/images/linkedinIcon.png";
import MediumIcon from "./../../resources/images/mediumIcon.png";
import TwitterIcon from "./../../resources/images/twitterIcon.png";
import LocationIcon from "./../../resources/images/locationIcon.svg";
import PhoneIcon from "./../../resources/images/phoneIcon.svg";
import EmailIcon from "./../../resources/images/emailIcon.svg";
import FooterLogo from "./../../resources/images/DwarfAILogo.png";
import FooterLogoText from "./../../resources/images/navLogoText.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mainFooter">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="leftFooterBox">
              <div className="imageBox">
                <img className="footerLogo" src={FooterLogo} alt="" />
                <img src={FooterLogoText} alt="" />
              </div>
              <h2>
                We are known for high quality services worldwide. We are simply
                the best you can find.
              </h2>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 d-flex align-items-center justify-content-center">
            <div className="middleFooterBox">
              <div className="row">
                <div className="col-6 d-flex justify-content-center p-2">
                  <div className="socialIconBox">
                    <a
                      href="https://www.linkedin.com/company/79796323/admin/?utm_source=+Linkedin+&utm_medium=+traffic&utm_campaign=track+&utm_id=+"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={LinkedinIcon} alt="Linkedin" />
                    </a>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center p-2">
                  <div className="socialIconBox">
                    <a
                      href="https://github.com/Dwarf-AI?utm_source=Github&utm_medium=+Traffic&utm_campaign=Track+&utm_id=+"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={GithubIcon} alt="Github" />
                    </a>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center p-2">
                  <div className="socialIconBox">
                    <a
                      href="https://medium.com/@dwarf_AI?utm_source=medium&utm_medium=+Traffic&utm_campaign=Track+&utm_id=+"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={MediumIcon} alt="Medium" />
                    </a>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center p-2">
                  <div className="socialIconBox">
                    <a
                      href="https://twitter.com/dwarf_ai?utm_source=Twitter+&utm_medium=+Traffic&utm_campaign=Track+&utm_id=+"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={TwitterIcon} alt="Twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-12">
            <div className="rightFooterBox">
              <h2>Contact</h2>
              <div className="footerContactBox">
                <div className="footerContact">
                  <div className="icon">
                    <img src={LocationIcon} alt="" />
                  </div>
                  <div className="text">
                    &works SECTOR - 15A, FIRST FLOOR, NEELAM AJRONDA CHOWK METRO
                    STATION, Faridabad, Haryana 121007
                  </div>
                </div>
                <div className="footerContact">
                  <div className="icon">
                    <img src={PhoneIcon} alt="" />
                  </div>
                  <div className="text">
                    +91 8587836880
                    <br />
                    +91 89508 08939
                  </div>
                </div>
                <div className="footerContact">
                  <div className="icon">
                    <img src={EmailIcon} alt="" />
                  </div>
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
