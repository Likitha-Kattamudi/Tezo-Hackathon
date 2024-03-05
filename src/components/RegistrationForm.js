import React from "react";
import "../styles/RegistrationForm.css";
import App from "../App";

const RegistrationForm = () => {
  return (
    <div className="registrationDIv">
      <App />
      <form className="form">
        <label>Team Name</label>
        <br />
        <input
          type="text"
          id="inputss"
          name="fname"
          placeholder="Enter your Team Name"
        />
        <br />
        <label>Select Captian</label>
        <br />
        <select name="members" id="dropDowns">
          <option value="Rohith">Rohith</option>
          <option value="Shashank">Shashank</option>
          <option value="Anudeep">Anudeep</option>
          <option value="Tarun">Tarun</option>
        </select>
        <br />
        <label>Select Members</label>
        <br />
        <select name="members" id="dropDowns">
          <option value="Rohith">Rohith</option>
          <option value="Shashank">Shashank</option>
          <option value="Anudeep">Anudeep</option>
          <option value="Tarun">Tarun</option>
        </select>
        <br />
        <label>Topic Name</label>
        <br />
        <input
          type="text"
          id="inputss"
          name="fname"
          placeholder="Enter your Topic Name"
        />
        <br />
        <label>Topic Summary</label>
        <br />
        <textarea
          type="text"
          id="inputss"
          name="fname"
          placeholder="Topic Summary"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
