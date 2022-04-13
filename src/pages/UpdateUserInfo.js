import { useState, useEffect, useContext, React } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate, Link, useParams, withRouter } from 'react-router-dom'
import "./../components/css/UpdateUserInfo.css"
import Swal from 'sweetalert2'

export default function UpdateUserInfo (){
	  const params = useParams();
	  // console.log(params.id)
	  const navigate = useNavigate()
	  const [userDetails, setUserDetails] = useState([])
	  const [firstName, setFirstName] = useState("")
	  const [lastName, setLastname] = useState("");
	  const [email, setEmail] = useState("");

	useEffect( async () => {
		let result = await fetch (`https://jcp-outfit.herokuapp.com/api/users/${params.id}`, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}
		});
		result = await result.json();
		setUserDetails(result)
		setFirstName(result.firstName)
		setLastname(result.lastName)
		setEmail(result.email)
	}, [])

	const handleUpdate = () => {
		fetch(`https://jcp-outfit.herokuapp.com/api/users/update-user/${params.id}`, {
			method: "PATCH",
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			email: email
		})
	})
		.then(result => result.json())
			.then(result => {
				Swal.fire('User info has been updated')
					navigate('/user-dashboard')			
			})
	}	
	return(

		<Container className="update-user-container">
		 	<h1 className="text-center">Update User Info</h1>
			<Form>
				<Row>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
					    	<Form.Control
					    	type="text"
					    	defaultValue={userDetails.firstName}
					    	onChange={(e)=>setFirstName(e.target.value)}
					    		
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Last Name</Form.Label>
					    	<Form.Control
					    	type="text"  	
					    	defaultValue={userDetails.lastName}	
					    	onChange={(e)=>setLastname(e.target.value)}
					    	/>
						</Form.Group>
					</Col>
					<Col xs={12}  md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
					    	<Form.Control
					    	type="text"
					    	defaultValue={userDetails.email}
					    	onChange={(e)=>setEmail(e.target.value)}
					    	/>
						</Form.Group>
					</Col>
					
				</Row>
				<Row>
					<Col xs={12}  md={2}>
						<Button  className="btn btn-info btn-block mb-3"
						onClick={()=>{handleUpdate(userDetails._id)}}>Save Changes</Button>
					</Col>
					<Col xs={12}  md={3}>
						<Link className="btn btn-info btn-block" to={`/user-dashboard`}>Back to Dashboard</Link>
					</Col>
				</Row>
				
			</Form>
		</Container>
	)
}