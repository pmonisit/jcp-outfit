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
		fetch(`https://jcp-outfit.herokuapp.com/api/users`, {
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
							<Link className="btn btn-success m-2" to={`/update-user/${user._id}`} onClick>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
								  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
								</svg>
							</Link>
							{
								user.isAdmin ?
									<Button 
										className="btn btn-danger mx-2 m-2"
										onClick={ () => handleArchive(user._id) }
									>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16" className="mr-2">
									  <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
									  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									</svg>
										Set to Non-Admin
									</Button>
								:
									<Fragment>
										<Button 
											className="btn btn-success mx-2 m-2"
											onClick={ () => handleUnarchive(user._id)}
										>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16" className="mr-2">
										  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
										  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
										</svg>
												Make Admin
										</Button>
										<Button 
											className="btn btn-secondary mx-2 m-2"
											onClick={ () => handleDelete(user._id) }
										>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" className="mr-2">
										  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
										</svg>
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
		fetch(`https://jcp-outfit.herokuapp.com/api/users/${userId}/setAsCustomer`, {
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

				alert('Successfully set to Non-Admin')
			}
		})
	}

	const handleUnarchive = (userId) =>{
		
		fetch(`https://jcp-outfit.herokuapp.com/api/users/${userId}/setAsAdmin`, {
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
				
				alert('Successfully set to Admin!')
			}
		})
	}

	const handleDelete = (userId) =>{
		console.log(userId)
		fetch(`https://jcp-outfit.herokuapp.com/api/users/${userId}/delete-user`, {
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
				<Link className="btn btn-primary m-2" to={`/add-user`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16" className="mr-2">
					  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
					  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
					</svg>
				Add User
				</Link>
				<Link className="btn btn-info m-2" to={`/products`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16" className="mr-2">
					  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
					</svg>
				Product Dashboard</Link>
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
