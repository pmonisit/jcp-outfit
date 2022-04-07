import {React, Fragment} from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./css/Product.css";

export default function ProductCard({productProp}){

	const { productName, description, price, _id } = productProp
	
	const dispatch = useDispatch()
  	const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        productName,
        _id,
        price
      })
    )
  }
//
	return(	
		<Fragment>	
			
			<div className="card">   
      			<h2>{productName}</h2>
	  			<h3>{description}</h3>
      			<p>&#8369; {price}</p>
     			<button onClick={addToCart}>Add to cart</button>
    		</div>
		</Fragment>			
	)
}
