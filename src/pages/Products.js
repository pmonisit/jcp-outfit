import {Fragment, useContext, useEffect, useState } from 'react'
import AdminView from './AdminView'
import ProductCard from './../components/ProductCard'
import UserContext from './../UserContext'
import "./../components/css/Product.css"

const admin = localStorage.getItem('admin')
const token = localStorage.getItem('token')


export default function Products(){
	const { state, dispatch } = useContext(UserContext)
	
	const [products, setProducts] = useState([])

	useEffect( () => {
		if(admin === "false" || admin === null){
			fetch(`https://jcp-outfit.herokuapp.com/api/products/active-products`, {
				method: "GET",
				headers:{
					"Authorization": `Bearer ${token}`
				}
			})
			.then(response => response.json())
			.then(response => {

				if(token !== null){
					dispatch({type: "USER", payload: true})
				}
				
				setProducts(
					response.map((products, index)  => {
						
						return (
							<div>
								<ul className='products-container'>
									<li key={index}>
										<ProductCard 
										key={products._id} 
										productProp={products}/>
									</li>
								</ul>
							</div>	
						)
						
					})
				)
			})
		}

	}, [])

	return(
		<Fragment>
			{
				admin === "false" || admin === null ?
					<Fragment>
						{products}
					</Fragment>
				:
					<Fragment>
						<AdminView/>
					</Fragment>
			}
		</Fragment>
	)
}
