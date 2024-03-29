import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="exploreMenu" id="exploreMenu">
      <h1 className="exploreMenuTittle"> Explore Our Menu!</h1>
      <p className="exploreMenuPara">
        Discover a Feast for Your Senses! Embark on a culinary journey with our
        tantalizing menu, meticulously crafted to delight your senses and
        satisfy your cravings. Start your meal with an array of appetizers, from
        crispy calamari to bacon-wrapped dates stuffed with creamy goat cheese.
        Our salads burst with freshness, offering vibrant combinations like
        Greek salad with tangy feta and Caesar salad with garlic croutons.
      </p>
      <div className="exploreMenuList">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="exploreMenuListItem"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className="menuListName">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="menuHorizontal" />
    </div>
  );
};

export default ExploreMenu;
