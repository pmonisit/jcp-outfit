import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

import UserContext from './../UserContext'

const token = localStorage.getItem('token')

export default function AddCourse(){

	const [productName, setProductName] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState(0)
	const [qty, setQty] = useState(1)

	const navigate = useNavigate()

	const { dispatch } = useContext(UserContext)


	useEffect(() => {
		if(token !== null){

			dispatch({type: "USER", payload: true})
		}
	}, [])


	const handleSubmit = (e) => {
		e.preventDefault()

		fetch('https://enigmatic-basin-10137.herokuapp.com/api/products/add-product',{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productName: productName,
				description: description,
				price: price,
				qty: qty
			})
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if(response){

				alert('Added successfully!')

				navigate('/products')
			}else{
				alert('Product Already Exist!')
			}
		})
	}

	return(
		<Container className="container m-5">
		 	<h1 className="text-center">Add Product</h1>
			<Form onSubmit={ (e) => handleSubmit(e) }>
				<Row>
					<Col xs={12} md={6}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Product Name"
					    		type="text" 
					    		value={productName}
					    		onChange={ (e) => setProductName(e.target.value) }
					    		
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12} md={6}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Product Description"
					    		type="text" 
					    		value={description}
					    		onChange={ (e) => setDescription(e.target.value) }
					    		
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={6}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Course Price"
					    		type="number" 
					    		value={price}
					    		onChange={ (e) => setPrice(e.target.value) }
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={6}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Quantity"
					    		type="number" 
					    		value={qty}
					    		onChange={ (e) => setQty(e.target.value) }   		
					    	/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col xs={12}  md={2}>
						<Button  className="btn btn-info btn-block"
						type="submit">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16" className="mr-2">
							  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
							</svg>
						Save
						</Button>
					</Col>
					<Col xs={12}  md={2}>
						<Link className="btn btn-info btn-block" to={`/products`}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16" className="mr-2">
							  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
							  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
							</svg>
						Back
						</Link>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}
