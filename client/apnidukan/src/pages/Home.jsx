import React from "react";
import "./home.css";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Slide from "../components/Slide";
const Home = () => {
  return (
    <>
      <SubNavbar />
      <Banner />
      <div className="slide_part">
        <Slide title="Deal Of The Day" />
        <Slide title="Best Seller" />
        <Slide title="Clothing" />
        <Slide title="Furniture" />
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
