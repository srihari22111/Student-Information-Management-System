import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import Logo from "../Assets/siss.PNG";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <section class="work" id="work">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Responsive, integrated and intuitive, Student point SIS for independent and private schools provides customized dashboards with:
        student attendance and discipline.
        </p>
        <p className="primary-text">
        online gradebook, assessments, GPA, class rank, report cards and transcripts,
        academic performance analysis,
        medical and emergency data,
        student enrollment forms and agreements,
        student billing items including statements, invoices, receipts,
        schedules and course selections,
        standardized test results, EIPs, individual plans,
        student boarding and dorm info,
        student communication through email, phone, text and online discussion forums.
        </p>
      </div>
      
      
  
    </div>
    </section>
  );
};

export default Work;
