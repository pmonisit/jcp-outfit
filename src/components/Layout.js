import React from "react";
import Products from "./../pages/Products";
import "./css/Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import AppNavBar from "./AppNavbar";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Layout = () => {
  let total = 0;

  const navigate = useNavigate()

  const itemsList = useSelector(state => state.cart.itemsList)
  
  itemsList.forEach(item => {
    total += item.totalPrice
  })
  const showCart = useSelector(state => state.cart.showCart)

  function placeOrder(){
    if(total === 0){
      Swal.fire('No item on your cart. Please add at least 1 item')
      navigate("/products")
    }else{
      Swal.fire("Your order/s has been placed")
      navigate("/products")
    }
  }
  
  return (
    <React.Fragment>
      <div className="layout">
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Subtotal: &#8369;{total}</h3>
          <button className="orderBtn" onClick={placeOrder}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
