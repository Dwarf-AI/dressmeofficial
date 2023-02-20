import "./HeroSection.scss";

function HeroSection(props) {
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
            <img
              src={props.heroSection.image}
              width="80%"
              alt="HeroSectionImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
