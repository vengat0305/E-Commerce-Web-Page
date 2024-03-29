import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <h1 className="logoFooter">foodSpot.</h1>
          <p>
            Discover a world of flavors with our diverse selection of cuisines,
            carefully curated to tantalize your taste buds. From comforting
            classics to exotic delights, our culinary journey awaits you. Join
            us as we celebrate the art of food, bringing people together one
            delicious bite at a time. Bon appétit!
          </p>
          <div className="footerSocialIcon">
            <i class="fa-brands fa-facebook "></i>
            <i class="fa-brands fa-instagram "></i>
            <i class="fa-brands fa-twitter "></i>
            <i class="fa-brands fa-linkedin "></i>
          </div>
        </div>
        <div className="footerContentCenter">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>About us</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="footerContentRight">
          <h2>Get in touch</h2>
          <ul>
            <li>+91-000-111-1234</li>
            <li>contact@foodSpot.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">
        Copyright 2024 @ foodSpot.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
