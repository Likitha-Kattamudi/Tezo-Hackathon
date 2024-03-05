import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applications from "./components/Applications";
import Home from "./components/Home";
import Registration from "./components/registration/Registration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    {/* <Home /> */}
    {/* <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/Home/:id" Component={HomePage} />
        <Route path="/Registraion-Form/:id" Component={RegistrationForm} />
        <Route path="/Applications/:id" Component={Applications} />
        
      </Routes>
    </BrowserRouter> */}
    <Registration />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
