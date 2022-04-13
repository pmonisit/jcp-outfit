import {React, Fragment} from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { useNavigate } from 'react-router-dom';
import "./css/Product.css";
import Swal from 'sweetalert2'

const token = localStorage.getItem('token')



export default function ProductCard({productProp}){

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
				<h2>{productName}</h2>
				<h3>{description}</h3>
				<p>&#8369; {price}</p>
				<button onClick={addToCart}>Add to cart</button>
			</div>			
		</Fragment>			
	)
}
