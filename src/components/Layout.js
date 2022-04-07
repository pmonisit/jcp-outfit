import React from "react";
import Products from "./Products";
import "./css/Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import AppNavBar from "./AppNavbar";

const Layout = () => {
  let total = 0;

  const itemsList = useSelector(state => state.cart.itemsList)
  const showCart = useSelector(state => state.cart.showCart)
  
  itemsList.forEach(item => {
    total += item.totalPrice
  })

  return (
    <React.Fragment>
      <div className="layout">
        <AppNavBar />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
