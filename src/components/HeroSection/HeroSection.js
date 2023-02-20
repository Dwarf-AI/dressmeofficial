import ImageGallery from "react-image-gallery";
import Model1 from "../../assets/model1.png";
import Model2 from "../../assets/model2.png";
import Model3 from "../../assets/model3.png";
import Thumb1 from "../../assets/thumb1.png";
import Thumb2 from "../../assets/thumb2.png";
import Thumb3 from "../../assets/thumb3.png";

import "./HeroSection.scss";

function HeroSection(props) {
  const images = [
    {
      original: Model1,
      thumbnail: Thumb1,
    },
    {
      original: Model2,
      thumbnail: Thumb2,
    },
    {
      original: Model3,
      thumbnail: Thumb3,
    },
  ];
  return (
    <div className="heroSection">
      <div className="container">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-lg-6 col-12 d-flex align-items-center">
            <div className="leftBox">
              <h1>Your Virtual</h1>
              <h1 className="second-line">Stylist,</h1>
              <h4>Try Before, You Buy</h4>
              <p>
                Our innovative technology allows you to try on an endless array
                of outfits without ever leaving your home. Our advanced virtual
                fitting room provides a realistic representation of how the
                clothes will look and fit, so you can confidently purchase the
                perfect outfit every time.
              </p>
              <div className="buttonBox">
                <div class="searchbox-wrap">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <span>Join the waitlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex align-itmes-center justify-content-center">
            <div className="outer-div">
              {/* <h1>Change Your Style</h1>
              <p>With A Click Of A Button</p> */}
              <ImageGallery
                showNav={false}
                showPlayButton={false}
                useBrowserFullscreen={false}
                items={images}
                showFullscreenButton={false}
                autoPlay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
