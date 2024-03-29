import React from "react";
import "./login.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Login = ({ setLogin }) => {
  const [currState, setCurrState] = useState("Log in");
  return (
    <div className="logInPopUp">
      <form className="logInContainer">
        <div className="logInTitle">
          <h2>{currState}</h2>
          <h3>
            <i onClick={() => setLogin(false)} class="fa-solid fa-xmark"></i>
          </h3>
          {/* <img src={assets.cross_icon} alt="icon" /> */}
        </div>
        <div className="logInInputs">
          {currState === "Log in" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Log in"}</button>
        <div className="logInCondition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Log in" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurrState("Log in")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
