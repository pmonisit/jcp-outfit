import { useState, useEffect, useContext, React } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import UserContext from './../UserContext'



const token = localStorage.getItem('token')

export default function UpdateProduct (){

	const search = useLocation().search;
	const id = new URLSearchParams(search).get("product._id");


	const [ productName, setProductName ] = useState('')
	const [ description, setDescription ] = useState('')
	const [ price, setPrice ] = useState(0)
	const [ qty, setQty ] = useState(1)

	const navigate = useNavigate()
	const { dispatch } = useContext(UserContext)


	const handleUpdate = (id) => {

		fetch(`http://localhost:4000/api/products/update-product/${product._id}`,{
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
			console.log(id)
			console.log(response)

			if(response){

				alert('Successfully updated product!')
			}
		})
	}

	
	return(

		<Container className="container m-5">
		 	<h1 className="text-center">Update Product</h1>
			<Form onSubmit={ (e) => handleUpdate(e) }>
				<Row>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Product Name"
					    		type="text" 
					    		value={productName}
					    		onChange={ (e) => setProductName(e.target.value) }
					    		
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Price"
					    		type="number" 
					    		value={price}
					    		onChange={ (e) => setPrice(e.target.value) }
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
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
					<Col xs={12}  md={12}>
						<Form.Group className="mb-3">
					    	<Form.Control
					    		placeholder="Product Description"
					    		type="text" 
					    		value={description}
					    		onChange={ (e) => setDescription(e.target.value) }
					    		
					    	/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col xs={12}  md={2}>
						<Button  className="btn btn-info btn-block"
						type="submit">Save Changes</Button>
					</Col>
					<Col xs={12}  md={2}>
						<Link className="btn btn-info btn-block" to={`/products`}>Back to Dashboard</Link>
					</Col>
				</Row>
				
			</Form>
		</Container>

	)
}