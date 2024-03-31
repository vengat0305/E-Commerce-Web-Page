import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cartItems">
        <h1 className="cartHead">Cart Detail's</h1>
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
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cross">
                    {/* <i class="fa-solid fa-xmark"></i> */}
                    <i class="fa-solid fa-trash"></i>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartBottom">
        <div className="cartTotal">
          <h2>Cart Totals</h2>
          <div>
            <div className="cartDetails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cartDetails">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cartDetails">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartPromCode">
          <div>
            <p>If you have promo code , Enter it here</p>
            <div className="cartPromoInput">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
