import React from "react";
import Accordion from "./Accordian";
import "./Testimonial.scss";
import Brand1 from "../../assets/brand1.svg";
import Brand2 from "../../assets/brand2.svg";
import Brand3 from "../../assets/brand3.svg";
import Brand4 from "../../assets/brand4.svg";
import Brand5 from "../../assets/brand5.svg";
import Brand6 from "../../assets/brand6.svg";

const Testimonial = () => {
  const accordionData = [
    {
      title: "What is Dressme?",
      content: `Dressme is a virtual try-on product that allows users to see how clothing items will look on them before making a purchase.`,
    },
    {
      title: "How does Dressme work?",
      content: `You can take a photo within the app or choose an existing photo from your camera roll. The app will guide you through the process of positioning your body and camera for the best results.`,
    },
    {
      title: "Is Dress Me available on both iOS and Android?",
      content: `Our team has been working tirelessly to create a product that will revolutionize the way you shop online and we are excited to announce that Dress Me will be available on both iOS and Android in just a few months.`,
    },
    {
      title: "How do I take a photo to use in Dressme?",
      content: `You can take a photo within the app or choose an existing photo from your camera roll. The app will guide you through the process of positioning your body and camera for the best results.`,
    },
    {
      title: "Can I try on different sizes of clothing in Dress Me?",
      content: `Yes, with Dressme you can try on different sizes of clothing virtually. When you select a clothing item to try on, you will have the option to choose different sizes, colors, and styles if available`,
    },
  ];
  return (
    <>
      <div className="testimonial-section" id="trustus">
        <div className="accordion pb-5">
          <div className="py-4 testimonial-title">
            <h1>FAQs</h1>
            <h2>All Your Queries Resolved</h2>
          </div>
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
