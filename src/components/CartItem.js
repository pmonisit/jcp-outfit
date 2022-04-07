import React from "react";
import { useDispatch } from "react-redux";
import "./css/Cart.css";
import { cartActions } from "./../store/cart-slice";
const CartItem = ({ productName, quantity, total, price, _id }) => {
  const dispatch = useDispatch();
  
  const incrementCartItem = () => {
    dispatch(cartActions.addToCart({
      productName,
      _id, 
      price
    }))
  }

  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(_id))
  }
//
  return (
    <div className="cartItem">
      <h2> {productName}</h2>
      <p>${price} /-</p>
      <p>qty:{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
