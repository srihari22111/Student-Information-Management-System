import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image (2).png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import Work from "./Work";
const Home = () => {
  return (
    <section class="Home" id="Home">
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Student Information Management System(SIMS)
          </h1>
          <p className="primary-text">
          The student management system enables coordination, scheduling and communication between the faculty members and admin for institute's operations. The system simplifies the process of information tracking for both the management and parents.
          </p>
          <button className="secondary-button">
            Explore Details<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt=""  width="800px" height="1800px"/>
        </div>
      </div>
    </div>
    <About />
    <Work />
    <Testimonial />
    <Contact />
    <Footer /> 
    </section>
  );
};

export default Home;
