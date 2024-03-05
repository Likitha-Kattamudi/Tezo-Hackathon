import React from "react";
import NavThroughForm from "./NavThroughForm";
import "../../styles/registrationStyles/Registration.css";

const Registration = () => {
  return (
    <div className="registerHome">
      <div className="navRegister">
        <a className="aTag" href="#" style={{ color: "gray" }}>
          Home
        </a>{" "}
        /{" "}
        <a className="aTag" href="#">
          Register
        </a>
      </div>
      <NavThroughForm />
    </div>
  );
};

export default Registration;
