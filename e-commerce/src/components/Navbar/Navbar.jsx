import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="logo">foodSpot.</h1>
      </Link>

      <ul className="navbarMenu">
        <Link to={"/"}>
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
            id="navLi"
          >
            Home
          </li>
        </Link>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
          id="navLi"
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Contact-us")}
          className={menu === "Contact-us" ? "active" : ""}
          id="navLi"
        >
          Contact us
        </li>
      </ul>
      <div className="navbarRight">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div className="navBarShop">
          <Link to="/cart">
            {" "}
            <i class="fa-solid fa-bag-shopping"></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setLogin(true)} className="btn signInBtn">
          log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
