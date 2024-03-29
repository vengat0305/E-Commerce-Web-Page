import React, { useContext } from "react";
import "./foodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="foodDisplay">
      <div className="foodTop">
        <h2>Top Dishes near you.</h2>
        <p className="foodDisplayParagraph">
          Mouthwatering Beef Stroganoff: Tender strips of beef cooked in a rich
          and creamy sauce with mushrooms and onions, served over a bed of egg
          noodles. Savory Chicken Parmesan: Juicy chicken breasts breaded and
          fried to perfection, topped with marinara sauce and melted mozzarella
          cheese, served with spaghetti.
        </p>
      </div>
      <div className="foodDisplayLIst">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
