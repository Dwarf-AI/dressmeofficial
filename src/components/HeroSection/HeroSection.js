import ImageGallery from "react-image-gallery";
import Model1 from "../../assets/model1.png";
import Model2 from "../../assets/model2.png";
import Model3 from "../../assets/model3.png";
import Thumb1 from "../../assets/thumb1.png";
import Thumb2 from "../../assets/thumb2.png";
import Thumb3 from "../../assets/thumb3.png";
import { motion } from "framer-motion";
import "./HeroSection.scss";

function HeroSection() {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // });

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
    // <animated.div style={springs}>
    <div className="heroSection">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-lg-6 col-12 d-flex align-items-center">
            <motion.div
              className="leftBox"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h1>Your Virtual</h1>
              <h1 className="second-line">Stylist,</h1>
              <h4 className="first-para">Try Before, You Buy</h4>
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
            </motion.div>
          </div>
          <div className="col-lg-6 col-12 d-flex align-itmes-center justify-content-center">
            <motion.div
              className="outer-div"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
              }}
            >
              <h1>
                Change Your <span>Style</span>
              </h1>
              <p>With A Click Of A Button</p>
              <ImageGallery
                showNav={false}
                showPlayButton={false}
                useBrowserFullscreen={false}
                items={images}
                showFullscreenButton={false}
                thumbnailPosition={"bottom"}
                autoPlay={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    // </animated.div>
  );
}

export default HeroSection;
