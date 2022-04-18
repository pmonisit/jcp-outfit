import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UserContext from './../UserContext'
import "./../components/css/Login.css"
import Swal from 'sweetalert2'

export default function Login(){

	
	const [ email, setEmail ] = useState("")
	const [ pw, setPW ] = useState("")
	const [ isDisabled, setIsDisabled ] = useState(true)

	const { state, dispatch } = useContext(UserContext)
	const navigate = useNavigate()

	useEffect( () => {
		if(email !== "" && pw !== ""){
			setIsDisabled(false)
		}else{
			setIsDisabled(true)
		}
	})

	const loginUser = (e) => {
		e.preventDefault()

		fetch('https://jcp-outfit.herokuapp.com/api/users/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: pw
			})
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if(response.message !== "User does not exist." && response !== false){

				localStorage.setItem('token', response.token)
				const token = localStorage.getItem("token")
				

				fetch(`https://jcp-outfit.herokuapp.com/api/users/profile`, {
					method: "GET",
					headers: {
						"Authorization": `Bearer ${token}`
					}
				})
				.then(response => response.json())
				.then(response => {

					localStorage.setItem('admin', response.isAdmin)
					
					console.log(response.isAdmin)
					if(response.isAdmin === true){
						navigate('/home-dashboard')
					}else{
						navigate('/')
					}	

					dispatch({type: "USER", payload: true})
				})

				setEmail("")
				setPW("")
				
				
			}else{
				Swal.fire(`Incorrect email or password.`)
			}
		})
	}

	return(
		<Container className="login">
		 	<h3 className="text-center">Login</h3>
			
			<Row className="justify-content-center">
				<Col xs={10} md={10}>
					<Form onSubmit={(e) => loginUser(e) }>
						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
					    	<Form.Control 
					    		type="email" 
					    		value={email}
					    		onChange={(e) => setEmail(e.target.value)}
					    	/>
						</Form.Group>

						<Form.Group className="mb-3">
					    	<Form.Label>Password</Form.Label>
					    	<Form.Control 
					    		type="password" 
					    		value={pw}
					    		onChange={(e) => setPW(e.target.value)}
					    	/>
						</Form.Group>

						<Button 
							variant="info" 
							type="submit"
							disabled={isDisabled}
						>
							Submit
						</Button>
						<small id="emailHelp" class="form-text text-muted">
				 			Not yet registered? <a href='./register'>Register now</a>
			 			</small>
					</Form>
				</Col>
			</Row>
		</Container>

	)
}