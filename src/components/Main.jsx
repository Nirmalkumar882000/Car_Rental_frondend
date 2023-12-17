import React from "react";
import NavBar from "./NavBar";
import background from "../images/background.png";
import masseratil1 from "../images/masserati1.png";
import carIco from "../images/car-ico.png";
import operatorIco from "../images/call-center-operator.png";
import driveIco from "../images/old-car.png";
import BookRide from "./BookRide";
import "../styles/main.css";

function Main() {
  return (
    <>
      <NavBar />
      <div className="main-page">
        <img
          src={background}
          className="background-main"
          alt="background image"
        />
        <img src={masseratil1} className="main-car" alt="masserati image" />

        <div className="description">
          <h1>Rent the luxury. Own the thrill</h1>
          <span>
            From exotic sports cars to luxury sedans and SUVs, the Exotic Car
            Collection by Exclusive Car Rental offers an exceptional selection
            and the trusted, personalized service of Enterprise.
          </span>

          <div className="btns">
            <a href="#bookride">
              <button className="btn book-ride">Book Ride </button>
            </a>
            <button className="btn learn-more">Learn more</button>
          </div>
        </div>

        <BookRide />

        <div className="trip-info">
          <h2>Plan Your Trip Now</h2>
          <div className="boxes">
            <div className="box">
              <img src={carIco} alt="car icons" />
              <h3>Select your car</h3>
              <span>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </span>
            </div>
            <div className="box">
              <img src={operatorIco} alt="operator icons" />
              <h3>Select your car</h3>
              <span>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </span>
            </div>
            <div className="box">
              <img src={driveIco} alt="drive icons" />
              <h3>Select your car</h3>
              <span>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
