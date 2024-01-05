import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image (2).png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section class="About" id="About">
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" width="400px" height="1800px" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Student Point
        </h1>
        <p className="primary-text">
        Student Management System (SMS) is a software designed to track and manage all the data created by the school such as a student's grades, attendance, interpersonal activity records, etc., as well as other school-related data.
        </p>
        <p className="primary-text">
        The comprehensive data that includes - student’s registration information, admission detail, fees payment status, hostel billing, scholarships or any other financial aid provision, etc.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
