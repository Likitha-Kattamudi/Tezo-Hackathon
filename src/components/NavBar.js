import React from "react";
import "../styles/HomePage.css";
// import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();
  // const handleClick = (navItem) => {
  //   navigate(navItem);
  // };
  return (
    <div className="navBar">
      <button
        //onClick={() => handleClick("/Home/:Home")}
        id="navLinks"
      >
        HOME
      </button>
      <button
        // onClick={() => handleClick("/Applications/:Applications")}
        id="navLinks"
      >
        APPLICATIONS
      </button>
      <button
        //  onClick={() => handleClick("/Team")}
        id="navLinks"
      >
        TEAMS
      </button>
      <button
        // onClick={() => handleClick("/My-Team")}
        id="navLinks"
      >
        MY TEAM
      </button>
      <button
        //  onClick={() => handleClick("/Admin")}
        id="navLinks"
      >
        ADMIN
      </button>
      <button
        // onClick={() => handleClick("/Registraion-Form/:rf")}
        id="navLinks"
      >
        REGISTRAION
      </button>
    </div>
  );
};

export default NavBar;
