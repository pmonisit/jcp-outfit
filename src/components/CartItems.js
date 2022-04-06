import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.itemsList)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
       {cartItems.map(item => (
         <li key={item._id}> 
           {" "}
           <CartItem
           quantity={item.quantity}
           _id={item._id} 
           price={item.price} 
           total={item.totalPrice} 
           name={item.name} 
          /> {" "}
         </li> 
       ))}
      </ul>
    </div>
  );
};

export default CartItems;
