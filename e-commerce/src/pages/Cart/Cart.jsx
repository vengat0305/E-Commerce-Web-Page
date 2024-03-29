import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cartItemsTitle cartItemsItem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cross">
                    <i class="fa-solid fa-xmark"></i>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
