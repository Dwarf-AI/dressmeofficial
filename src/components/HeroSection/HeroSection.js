import "./HeroSection.scss";

function HeroSection(props) {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contactForm");
    contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="heroSection">
      <div className="container">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-lg-6 col-12 d-flex align-items-center">
            <div className="leftBox">
              <h1>{props.heroSection.title}</h1>
              <p>{props.heroSection.description}</p>
              <div className="buttonBox">
                <button className="enquireBTN" onClick={scrollToContactForm}>
                  Enquire Now
                </button>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                  />
                  <button className="whatsappBTN">
                    <a href="https://api.whatsapp.com/send?phone=+918700964103&text=Hi,%20Dwarf-AI,%20I%20am%20looking%20to%20make%20my%20business%20smarter.%20Can%20we%20discuss%20further?">
                      <i className="whatsappIcon fa-brands fa-whatsapp"></i>
                      Connect on WhatsApp
                    </a>
                  </button>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
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
