import React, { useContext } from "react";
import "./foodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  // console.log(id);
  return (
    <div className="foodItem">
      <div className="foodItemContainer">
        <img className="foodItemImage" src={image} alt="" />
        <div className="foodItemInfo">
          <div className="foodTittleRating">
            <p>{name}</p>
            {/* <img src={assets.rating_starts} alt="" /> */}
            <div className="foodRating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          {!cartItems[id] ? (
            <img
              className="addIcon"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="foodItemCounter">
              <img
                className="counterIconMinus"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                className="counterIconPlus"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
          <p className="foodItemDescription">{description}</p>
          <p className="foodItemPrice">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
