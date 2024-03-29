import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      {/* <img className="headerImg" src="/public/images/8810181.jpg" alt="img" /> */}
      <div className="headerContents">
        <h2 className="headerTittle">
          "Welcome to <b className="header-logo">FoodSpot</b>, Your Culinary
          Oasis!"
        </h2>
        <p className="headerParaFirst">
          Explore the flavors of the world with our curated collection of
          recipes, cooking tips, and culinary inspirations. Indulge your senses,
          ignite your passion for cooking, and embark on a delicious journey
          with us. From mouthwatering dishes to kitchen hacks, we have
          everything you need to elevate your culinary skills.
        </p>
        <p className="headerParaSecond">
          Join our community of food enthusiasts and let's savor every bite
          together!
        </p>
        <button className="headerBtn">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
