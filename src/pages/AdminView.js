import { useEffect, useState, Fragment, useContext } from 'react'
import { Container, Table, Button, Modal, Row, Form, Col } from 'react-bootstrap'
import UserContext from './../UserContext'
import {Link} from 'react-router-dom'


export default function AdminView() {

	const [allProducts, setAllProducts] = useState([])

	const { dispatch } = useContext(UserContext)

	const [show, setShow] = useState(false);

	 const handleClose = () => setShow(false);
	 const handleShow = () => setShow(true);


	const fetchData = () => {
		fetch(`http://localhost:4000/api/products`, {
			method: "GET",
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)

			dispatch({type: "USER", payload: true})

			setAllProducts( response.map(product => {


				return(
					<tr key={product._id}>
						<td>{product.productName}</td>
						<td>{product.description}</td>
						<td>{product.price}</td>
						<td>{product.qty}</td>
						<td>{product.isActive ? "Active" : "Inactive"}</td>
						<td>
							<Button variant="primary" onClick={handleShow}>
							        Update
							</Button>
							{
								product.isActive ?
									<Button 
										className="btn btn-danger mx-2"
										onClick={ () => handleArchive(product._id) }
									>
										Archive
									</Button>
								:
									<Fragment>
										<Button 
											className="btn btn-success mx-2"
											onClick={ () => handleUnarchive(product._id)}
										>
												Unarchive
										</Button>
										<Button 
											className="btn btn-secondary mx-2"
											onClick={ () => handleDelete(product._id) }
										>
											Delete
										</Button>
									</Fragment>
							}
						</td>
					</tr>
				)
			}))
		})
	}

	useEffect(() => {
		fetchData()

	}, [])

	const handleArchive = (productId) =>{
		fetch(`http://localhost:4000/api/products/${productId}/archive`, {
			method: "PATCH",
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)

			if(response){
				fetchData()

				alert('Successfully moved to archive!')
			}
		})
	}

	const handleUnarchive = (productId) =>{
		
		fetch(`http://localhost:4000/api/products/${productId}/unarchive`, {
			method: "PATCH",
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)

			if(response){
				fetchData()
				
				alert('This product is now available!')
			}
		})
	}

	const handleDelete = (productId) =>{
		
		fetch(`http://localhost:4000/api/products/${productId}/delete-product`, {
			method: "DELETE",
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)

			if(response){
				fetchData()
				
				alert('Product successfully Deleted!')
			}
		})
	}

	return(
		<Fragment>
		<Container className="container">
			<h1 className="my-5 text-center">Product Dashboard</h1>
			<div className="text-center">
				<Link className="btn btn-primary m-2" to={`/add-product`}>Add Product</Link>
				<Link className="btn btn-info m-2" to={`/user-dashboard`}>User Dashboard</Link>
			</div>
			<Table>
				<thead>
					<tr>
						
						<th>Product Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ allProducts }
				</tbody>
			</Table>
		</Container>

	{/* Start of Modal to Update Product */}
		<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>     
  			<Form>
  				<Form.Group className="mb-3">
  					<Form.Label>Product name</Form.Label>
  			    	<Form.Control defaultValue=""/>
  				</Form.Group>

  				<Form.Group className="mb-3">
  			    	<Form.Label>Description</Form.Label>
  			    	<Form.Control as="textarea" rows={3}/>
  				</Form.Group>

  				<Form.Group className="mb-3">
  			    	<Form.Label>Price</Form.Label>
  			    	<Form.Control type="Number"/>
  				</Form.Group>  

  				<Form.Group className="mb-3">
  			    	<Form.Label>Quantity</Form.Label>
  			    	<Form.Control type="Number"/>
  				</Form.Group>      		
  			</Form>
          		
        </Modal.Body>
       <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>

      	</Modal>

      		
		</Fragment>

	)

}
