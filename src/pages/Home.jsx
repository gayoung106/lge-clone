import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Popup from "../components/Popup";
import Menu from "../components/Menu";
import Advertise from "../components/Advertise";
import Slide from "../components/Slide";
import Rank from "../components/Rank";
import Recommend from "../components/Recommend";
import Grid from "../components/Grid";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Sections from "../components/Sections";

const Home = () => {
  return (
    <div>
      <Header />

      <Carousel />
      <div style={{ position: "relative", marginTop: "505px" }}>
        <Popup />

        <Menu />
        <Advertise />
        <Sections />
        <Slide />
        <Rank />
        <Recommend />
        <Grid />
        <Slide />
        <Grid />
        {/* <Advertise /> */}
        <Grid />
        <Information />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
