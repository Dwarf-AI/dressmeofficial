import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroSectionImage from "../assets/Logo.png";
import Testimonial from "../components/Testimonial/Testimonial";
import FeatureSection from "../components/featureSection/FeatureSection";

const Home = () => {
  const navbar = {
    firstNav: "Home",
    firstNavLink: "/",
    secondNav: "BlockChain",
    secondNavLink: "/blockchain",
    thirdNav: "Blogs",
    thirdNavLink: "/blogs",
  };

  const heroSection = {
    title: "Your Virtual Stylist,Try Before, You Buy",
    description:
      "Our innovative technology allows you to try on an endless array of outfits without ever leaving your home. Our advanced virtual fitting room provides a realistic representation of how the clothes will look and fit, so you can confidently purchase the perfect outfit every time.-AI helps you automate your business end-to-end with AI applications, software solutions, and machine learning algorithms",
    image: HeroSectionImage,
  };

  return (
    <>
      <Navbar navbar={navbar} />
      <HeroSection heroSection={heroSection} />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
