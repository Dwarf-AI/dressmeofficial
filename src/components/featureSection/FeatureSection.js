import React from "react";
import "./FeatureSection.scss";
import Image from "./../../assets/display.png";
import Arrowup from "./../../assets/arrowup.png";

const FeatureSection = () => {
  return (
    <>
      <div className="featureSection" id="whyus">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center my-auto center-img1  ">
              <img
                src={Image}
                // width="270px"
                width="80%"
                style={{ paddingRight: "100px", transformStyle: "preserve-3d" }}
                className="rounded img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-4  box1">
              <div className="cardd ">
                <div className="text-right">
                  <img
                    src={Arrowup}
                    width="170px"
                    style={{
                      transform: "rotate(180deg)",
                      marginBottom: "10px",
                    }}
                    className=" img"
                    alt=""
                  />
                </div>
                <h1 className="heading-1">Share your</h1>
                <h1 className="heading-2">Style</h1>
                <p>
                  Show off your virtual outfits on social media and get feedback
                  from friends.
                </p>
              </div>
              <div className="cardd">
                <div className="text-right">
                  <img
                    src={Arrowup}
                    width="170px"
                    style={{
                      transform: "rotate(180deg)",
                      marginBottom: "10px",
                    }}
                    className=" img"
                    alt=""
                  />
                </div>
                <h1 className="heading-1">Share your</h1>
                <h1 className="heading-2">Wardrobe</h1>
                <p>
                  Show off your virtual outfits on social media and get feedback
                  from friends.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center my-auto center-img2 pl-2">
              <img
                src={Image}
                style={{ paddingRight: "10px", transformStyle: "preserve-3d" }}
                className="rounded img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-4 box2">
              <div className="cardd">
                <h1 className="heading-1">Share your</h1>
                <h1 className="heading-2">Confidence</h1>
                <p>
                  Shop online with confidence knowing what you’re buying will
                  look great on you.
                </p>
                <img src={Arrowup} width="170px" className=" img" alt="" />
              </div>
              <div className="cardd">
                <h1 className="heading-1">Share your</h1>
                <h1 className="heading-2">Inspiration</h1>
                <p>
                  Get outfit suggestions tailored to your style, body shape, and
                  occasion.
                </p>
                <img
                  src={Arrowup}
                  width="170px"
                  // style={{ transform: "rotate(180deg)" }}
                  className=" img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
