import React from "react";
import NavBar from "./components/Home/NavBar";
import Home from "./components/Home/Home";
import MainHome from "./components/Home/MainHome";
import ScrollAnimation from "./Animations/ScrollAnimation";
import Footer from "./components/Home/Footer";


const MainApp = () => {
  return (
    <div>
      <Home />
      <NavBar />
      <ScrollAnimation />
      <MainHome />
      <Footer />
    </div>
  );
};

export default MainApp;
