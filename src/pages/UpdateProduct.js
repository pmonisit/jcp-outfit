import { useState, useEffect, useContext, React } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate, Link, useParams, withRouter } from 'react-router-dom'
import "./../components/CSS/UpdateProduct.css"
import Swal from 'sweetalert2'

export default function UpdateProduct (){

	  const params = useParams();
	  // console.log(params.id)
	  const navigate = useNavigate()
	  const [productDetails, setProductDetails] = useState([])
	  const [productName, setProductName] = useState("");
	  const [description, setDescription] = useState("");
	  const [price, setPrice] = useState("");
	  const [qty, setQty] = useState("");

	useEffect( async () => {
		let result = await fetch (`https://jcp-outfit.herokuapp.com/api/products/${params.id}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		});
		result = await result.json();
		setProductDetails(result)
		setProductName(result.productName)
		setDescription(result.description)
		setPrice(result.price)
		setQty(result.qty)	
	}, [])

	const handleUpdate = () => {

   
		fetch(`https://jcp-outfit.herokuapp.com/api/products/update-product/${params.id}`, {
			method: "POST",
			headers:{
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
		.then(result => result.json())
			.then(result => {
				console.log(result.productName)
				Swal.fire('Product successfully updated.')
					navigate('/products')	
			})
	}	
	return(

		<Container className="update-product-container">
		 	<h1 className="text-center">Update Product</h1>
			<Form>
				<Row>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Product Name</Form.Label>
					    	<Form.Control
					    	type="text"
					    	defaultValue={productDetails.productName}
					    	onChange={(e)=>setProductName(e.target.value)}
					    		
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Price</Form.Label>
					    	<Form.Control
					    	type="number"  	
					    	defaultValue={productDetails.price}	
					    	onChange={(e)=>setPrice(e.target.value)}
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Quantity</Form.Label>
					    	<Form.Control
					    	type="number"
					    	defaultValue={productDetails.qty}
					    	onChange={(e)=>setQty(e.target.value)}
					    	/>
						</Form.Group>
					</Col>
					
				</Row>
				<Row>
					<Col xs={12}  md={12}>
						<Form.Group className="mb-3">
						<Form.Label>Product Description</Form.Label>
					    	<Form.Control
					    	type="text"
					    	defaultValue={productDetails.description}
							onChange={(e)=>setDescription(e.target.value)}
					    	/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col xs={12}  md={2}>
						<Button  className="btn btn-info btn-block mb-3"
						onClick={()=>{handleUpdate(productDetails.id)}}>Save Changes</Button>
					</Col>
					<Col xs={12}  md={3}>
						<Link className="btn btn-info btn-block" to={`/products`}>Back to Dashboard</Link>
					</Col>
				</Row>
			</Form>
		</Container>

	)
}