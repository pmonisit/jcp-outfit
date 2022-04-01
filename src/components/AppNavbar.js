import { Fragment, useContext, useEffect } from 'react'
import {Navbar, Container, Nav, Form, FormControl, NavDropdown, Button, Image } from 'react-bootstrap'
import UserContext from './../UserContext'
const token = localStorage.getItem('token')
const admin = localStorage.getItem('admin')




export default function AppNavBar(){

	const { state, dispatch } = useContext(UserContext)

	useEffect( () => {
		if(token){
			dispatch({type: "USER", payload: true})
		} else {
			dispatch({type: "USER", payload: null})
		}
	}, [])

	const NavLinks = () => {

		if(state === true){
			return(
				<Fragment>
					<Nav.Link 
						href="/logout" 
						className="text-light">Logout</Nav.Link>
				</Fragment>
			)
		} 
		else {
			return(
				<Fragment>
				    <Nav.Link 
				        href="/login" 
				        className="text-light">Login</Nav.Link>
				    <Nav.Link 
				        href="/register" 
				        className="text-light">Register</Nav.Link>
				</Fragment>
			)
		}
	}

	

	return(

		<Navbar bg="dark" expand="lg" className="text-white">
		  <Navbar.Brand href="/" className="text-light"> 
		        JCP Outfit
		      </Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="/" className="text-light">Home</Nav.Link>
		      <Nav.Link href="/products" className="text-light">Products</Nav.Link>
		       
		    </Nav>
		    <Nav>
		          <Nav.Link href="/cart" className="text-light">
		          		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  						<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
						</svg>
		          </Nav.Link>
		         
		          <NavLinks/>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

