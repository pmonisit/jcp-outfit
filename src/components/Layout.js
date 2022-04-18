import React, {Fragment} from "react";
import Products from "./../pages/Products";
import "./CSS/Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import AppNavBar from "./AppNavbar";
import { useNavigate, Link} from "react-router-dom";
import Cart from "./Cart"
import Swal from 'sweetalert2'

const Layout = () => {
  let total = 0;

  const navigate = useNavigate()

  const itemsList = useSelector(state => state.cart.itemsList)
  
  itemsList.forEach(item => {
    total += item.totalPrice
  })
 
  function placeOrder(){
    if(total === 0){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No item on your cart. Please add at least 1 item',
        showConfirmButton: true
      })
      navigate("/products")
    }else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your order/s has been placed',
        showConfirmButton: false,
        timer: 1500
      })
     
      navigate("/products")
 
    }
  }

  function checkCart() {
    if(total === 0){
      return(
        <Fragment>
          <h4 className="text-center">
           No item on your cart
          </h4>
        <Link className="text-center" to={"/products"}>
          Go shopping
        </Link>
        </Fragment>
        
        )
    }else{
        return <CartItems />
    }
  }
  return (
    <React.Fragment>
      <div className="layout">
        {checkCart()}
        <div className="total-price">
          <h3>Subtotal: &#8369;{total}</h3>
          <button className="orderBtn" onClick={placeOrder}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
