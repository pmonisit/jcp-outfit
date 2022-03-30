import { useState, useEffect, useContext, React } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import UserContext from './../UserContext'
const token = localStorage.getItem('token')

export default function UpdateUserInfo (){

	const navigate = useNavigate()
	const { dispatch } = useContext(UserContext)
	
	return(

		<Container className="container m-5">
		 	<h1 className="text-center">Update User Info</h1>
			<Form onSubmit={ (e) => handleUpdate(e) }>
				<Row>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
					    	<Form.Control/>
						</Form.Group>
					</Col>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Last Name</Form.Label>
					    	<Form.Control/>
						</Form.Group>
					</Col>
					<Col xs={12} md={4}>
						<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
					    	<Form.Control/>
						</Form.Group>
					</Col>	
				</Row>	
				<Row>
					<Col xs={12}  md={2}>
						<Button  className="btn btn-info btn-block"
						type="submit">Save Changes</Button>
					</Col>
					<Col xs={12}  md={2}>
						<Link className="btn btn-info btn-block" to={`/user-dashboard`}>Back to Dashboard</Link>
					</Col>
				</Row>
			</Form>
		</Container>

	)
}