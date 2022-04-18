import {React, Fragment} from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useNavigate } from 'react-router-dom';
import "./css/Product.css";
import Swal from 'sweetalert2'

export default function ProductCard({productProp}){

	const token = localStorage.getItem('token')

	const { productName, description, price, _id } = productProp
	const navigate = useNavigate()
	const dispatch = useDispatch()

  	const addToCart = () => {

		if(token){
			dispatch(
				cartActions.addToCart({
				  productName,
				  _id,
				  price
				})
			  )
		}else{
			Swal.fire({
				title: 'You need to login',
				text: "Do you want to login now?",
				icon: 'info',
				showCancelButton: true,
				cancelButtonText: 'Maybe later',
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Go to Login Page'
			  }).then((result) => {
				if (result.isConfirmed) {
					navigate("/login")
				}
			  })
		}
  }
	return(	
		<Fragment>	
			<div className="card">   
				<img src='https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'/>
				<h2>{productName}</h2>
				<h3>{description}</h3>
				<p>&#8369; {price}</p>
				<button onClick={addToCart}>Add to cart</button>
			</div>			
		</Fragment>			
	)
}
