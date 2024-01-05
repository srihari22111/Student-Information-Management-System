import React from "react";
import ProfilePic from "../Assets/john-doe-image (2).png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section class="Testimonial" id="Testimonial">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Services</h1>
        <p className="primary-text">
        Cloud hosted, no download required : 
        Nothing to download and install. Just sign-up and use. Secure and infinitely scalable. Hosted on Microsoft Azure cloud. 99.99% uptime guaranteed.
        </p>
        <p className="primary-text">
        Built-in predictive analytics : 
Artificial Intelligence and Machine Learning (AI-ML) based analytics to identify “at risk” students and prevent dropouts.
        </p>
        <p className="primary-text">
        Responsive design : 
Built for the mobile generation with mobile-first design approach. Fully functional Teacher, Student and Parent portal features on mobile.
        </p>
        <p className="primary-text">
        Speedy start : 
Blazing fast onboarding in minutes with step-by-step guides and videos. Multi-channel support with a human touch. White-glove services provided.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        On-Demand Training and Support  :  
        This service is available if you need help with a particular functional or technical issue, or if you require best practice assistance about a particular openSIS capability. As a paid subscriber to openSIS, you will receive unlimited on-line training and support so that you can derive the full benefits of the system without frustration.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
