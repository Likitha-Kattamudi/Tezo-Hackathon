import React from "react";
import bgImage from "../assets/bgImage.jpg";
import "../styles/Home.css";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="hex">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="bottomShape">
        <div className="introDiv">
          <h1>
            Join the Tezo <br /> Hackathon!
          </h1>
          <p>Welcome to Tezo Hackathon</p>
          <button id="registerBtn">Register Now</button>
        </div>
      </div>
      <div
        className="div2"
        style={{
          backgroundImage: `url(${bgImage})`,
          // width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Home;
