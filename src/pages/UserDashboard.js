import { useEffect, useState, Fragment, useContext } from 'react'
import { Container, Table, Button, Modal, Row, Form, Col } from 'react-bootstrap'
import UserContext from './../UserContext'
import {Link} from 'react-router-dom'


export default function UserDashboard() {

	const [allUsers, setAllUsers] = useState([])

	const { dispatch } = useContext(UserContext)

	const [show, setShow] = useState(false);

	 const handleClose = () => setShow(false);
	 const handleShow = () => setShow(true);


	const fetchData = () => {
		fetch(`http://localhost:4000/api/users`, {
			method: "GET",
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)

			dispatch({type: "USER", payload: true})

			setAllUsers( response.map(user => {


				return(
					<tr key={user._id}>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>{user.email}</td>
						<td>{user.isAdmin ? "Admin" : "Non-Admin"}</td>
						<td>
							<Button variant="primary" onClick={handleShow}>
							        Update
							</Button>
							{
								user.isAdmin ?
									<Button 
										className="btn btn-danger mx-2"
										onClick={ () => handleArchive(user._id) }
									>
										Set as Non-Admin
									</Button>
								:
									<Fragment>
										<Button 
											className="btn btn-success mx-2"
											onClick={ () => handleUnarchive(user._id)}
										>
												Set as Admin
										</Button>
										<Button 
											className="btn btn-secondary mx-2"
											onClick={ () => handleDelete(user._id) }
										>
											Delete User
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

	const handleArchive = (userId) =>{
		fetch(`http://localhost:4000/api/users/${userId}/setAsCustomer`, {
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

				alert('Successfully added to Non-Admin')
			}
		})
	}

	const handleUnarchive = (userId) =>{
		
		fetch(`http://localhost:4000/api/users/${userId}/setAsAdmin`, {
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
				
				alert('Successfully added to Admin!')
			}
		})
	}

	const handleDelete = (userId) =>{
		console.log(userId)
		fetch(`http://localhost:4000/api/users/${userId}/delete-user`, {
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
				
				alert('User has been deleted!')
			}
		})
	}


	return(
		<Fragment>
		<Container className="container">
			<h1 className="my-5 text-center">User Dashboard</h1>
			<div className="text-center">
				<Link className="btn btn-primary m-2" to={`/add-user`}>Add User</Link>
				<Link className="btn btn-info m-2" to={`/products`}>Product Dashboard</Link>
			</div>
			<Table>
				<thead>
					<tr>
						
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ allUsers }
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
          <Modal.Title>Update User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>     
  			<Form>
  				<Form.Group className="mb-3">
  					<Form.Label>First Name</Form.Label>
  			    	<Form.Control type="text"/>
  				</Form.Group>

  				<Form.Group className="mb-3">
  					<Form.Label>Last Name</Form.Label>
  			    	<Form.Control type="text"/>
  				</Form.Group>


  				<Form.Group className="mb-3">
  					<Form.Label>Email</Form.Label>
  			    	<Form.Control type="email"/>
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
