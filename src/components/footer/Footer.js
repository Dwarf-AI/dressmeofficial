import React from "react";
import "./Footer.scss";
import NavLogo from "./../../assets/Logo.png";
import rightArrow from '../../assets/right-arrow.png';
import emailjs from 'emailjs-com'
import {useState} from 'react';
import { emailValidator } from "../../utils";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../constant";

function Footer() {

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const formHandler = (e)=>{
    e.preventDefault();
    if(emailValidator(email)){
      emailjs.send(SERVICE_ID, TEMPLATE_ID,{from_name: email},PUBLIC_KEY)
      .then((result) => {
        if(result.text === "OK") {
          setEmailSent(true);
        }
    }, (error) => {
    });
    }
    else{
      setEmailErr("Please provide a valid email*");
      setTimeout(()=>{
        setEmailErr("");
      },3000);
    }
      
  }
  return (
    <>
      <div className="footer px-5">
        <div className="container-fluid ">
          <div className="row py-4 my-4">
            <div className="my-auto text-center  text-md-center col-lg-3">
              <a href="#">
                <img
                  src={NavLogo}
                  width="170px"
                  className="rounded img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="my-3 text-center col-lg-5 ">
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
            <div className="my-auto text-center col-lg-4">
             {!emailSent ? 
              <div class="searchbox-wrap">
              <input type="email" placeholder="Join the waitlist" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                <button onClick={formHandler}>
                  <img src={rightArrow} />
                </button>
              </div> :
                <button className="emailSent">
                <span>Thank you !</span>
              </button>}
                {emailErr &&
                    <div className="err-field">{emailErr}</div>}
            </div>
          </div>
          
          <div className="row footer-lower">
            <div className={`col-md-6 py-3 ${window.outerWidth < 500 ? 'text-center' : 'text-left'}`}>
              © 2023 Dressme. All rights reserved
            </div>
            <div className={`col-md-6 py-3 ${window.outerWidth < 500 ? 'text-center' : 'text-right'}`}>
              hello@dressmeofficial.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
