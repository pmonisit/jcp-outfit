import {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Container, Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./../components/css/Register.css"

export default function Register(){
	const [fN, setFN] = useState("")
	const [lN, setLN] = useState("")
	const [email, setEmail] = useState("")
	const [pw, setPW] = useState("")
	const [vpw, setVPW] = useState("")
	const [isDisabled, setIsDisabled] = useState(true)

	const navigate = useNavigate();

	// useEffect(function, options)
	useEffect(() => {

		// if all fields are filled out and pw & vpw is equal, change the state to false
		if((fN !== "" && lN !== "" && email !== "" && pw !== "" && vpw !== "") && (pw == vpw)){

			setIsDisabled(false)

		} else {
			//if all input fields are empty, keep the state of the button to true
			setIsDisabled(true)
		}

	}, [fN, lN, email, pw, vpw])

	const registerUser = (e) => {
		e.preventDefault()

		fetch('https://jcp-outfit.herokuapp.com/api/users/email-exists', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(response => response.json())
		.then(response => {
			// console.log(response)	//false
			if(!response){
				//send request to register
				fetch('https://jcp-outfit.herokuapp.com/api/users/register', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						firstName: fN,
						lastName: lN,
						email: email,
						password: pw
					})
				})
				.then(response => response.json())
				.then(response => {
					
					// console.log(response)
					if(response){
						alert('Registration Successful.')

						navigate('/login')
					} else
					{
						alert('Something went wrong. Please try again')
					}
				})

			} else{
				alert(`Email is already exists. Try another one`)
			}
		})
	}

	return(
		
		<Container className="register-body">

		
		<Container className="register">
		 	<h3 className="text-center">Register</h3>
			 <small id="emailHelp" class="form-text text-muted text-center mb-2">
				 			Registered already? <a href='./login'>Login</a>
			 </small>
			<Row className="justify-content-center">
				<Col xs={12} md={10}>
					<Form onSubmit={(e) => registerUser(e) }>
						<Form.Group className="mb-3">
							<Form.Label>First Name</Form.Label>
					    	<Form.Control 
					    		type="text" 
					    		value={fN}
					    		onChange={(e) => setFN(e.target.value)}
					    	/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Last Name</Form.Label>
					    	<Form.Control 
					    		type="text" 
					    		value={lN}
					    		onChange={(e) => setLN(e.target.value)}
					    	/>
						</Form.Group>

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

						<Form.Group className="mb-3">
					    	<Form.Label>Verify Password</Form.Label>
					    	<Form.Control 
					    		type="password" 
					    		value={vpw}
					    		onChange={(e) => setVPW(e.target.value)}
					    	/>
						</Form.Group>
						<Button 
							variant="info" 
							type="submit"
							disabled={isDisabled}
						>
							Submit
						</Button>
						
					</Form>
				</Col>
			</Row>
		</Container>
		</Container>
	)
}
