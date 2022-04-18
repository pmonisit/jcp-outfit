import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "./CSS/Cart.css";
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
    <Fragment>
      <div className="cartItem">
      <h5><strong>{productName}</strong></h5>
      <p>&#8369;{price}</p>
      <p>Qty: {quantity}</p>
      <article>Total: &#8369;{total}</article>
      <button className="cart-actions" onClick={decrementCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
    </Fragment>
   
  );
};

export default CartItem;
