import React from "react";
import "./Footer.scss";
import NavLogo from "./../../assets/Logo.png";

function Footer() {
  return (
    <>
      <div class="footer px-5  ">
        <div class="container-fluid px-5 ">
          <div class="row py-4">
            <div class="my-auto text-left col-md-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.bizsomia"
                target="_blank"
              >
                <img
                  src={NavLogo}
                  width="170px"
                  class="rounded img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div class="my-3 text-center col-md-6">
              <div class="text-center">
                <ul class="nav justify-content-center footer-links">
                  <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                      Why Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="communityguidelines.html"
                      target="_blank"
                    >
                      Trusted by
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="clearfix w-100 d-md-none" />
            <div class="my-3 text-center col-md-3">
              <a class="nav-link" href="#">
                working
              </a>
            </div>
          </div>
          <div className="row footer-lower">
            <div class=" col-md-6 py-3 text-left ">
              © 2022 Company name. All rights reserved
            </div>
            <div class=" col-md-6 py-3  text-right">
              hello@dressmeofficial.com
            </div>
          </div>
        </div>
      </div>
    </>

    /* <div className="footer">
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
    </div> */
  );
}

export default Footer;
