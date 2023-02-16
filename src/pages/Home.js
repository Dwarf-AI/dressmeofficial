import React from "react";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const navbar = {
    firstNav: "Home",
    firstNavLink: "/",
    secondNav: "BlockChain",
    secondNavLink: "/blockchain",
    thirdNav: "Blogs",
    thirdNavLink: "/blogs",
  };
  return (
    <>
      <Navbar navbar={navbar} />
    </>
  );
};

export default Home;
