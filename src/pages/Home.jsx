import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Popup from "../components/Popup";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Sections from "../components/Sections";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Popup />
      <Menu />
      <Sections />
      <Footer />
    </div>
  );
};

export default Home;
