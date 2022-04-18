import { React, Fragment, useContext, useEffect } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import UserContext from './../UserContext'

import Cart from "./Cart";
import "./css/AppNavbar.css";




export default function AppNavBar(){

	const token = localStorage.getItem('token')
	const admin = localStorage.getItem('admin')
	

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

			if(admin === "false"){
				return(
					<Fragment>
						<Nav.Link  className="header-ul">
							<Cart />
		          		</Nav.Link>   
						<Nav.Link 
						href="/logout" 
						className="header-ul">Logout</Nav.Link>
					</Fragment>
				)
			}else{
				return(
				<Nav.Link href="/logout" className="header-ul">Logout</Nav.Link>)
			}
				
		} 
		else {
			return(
				<Fragment>
				    <Nav.Link 
				        href="/login" 
				        className="header-ul">Login</Nav.Link>
				    <Nav.Link 
				        href="/register" 
				        className="header-ul">Register</Nav.Link>
				</Fragment>
			)
		}
	}

	const CheckUser = () => {
		if (admin === "true" && state === !null)
		{
			return(
				<Nav.Link href="/products" className="header-ul">Dashboard</Nav.Link>
			)
			
		}
		else{
			return(
				<Fragment>
					<Nav.Link href="/" className="header-ul">Home</Nav.Link>
					<Nav.Link href="/products" className="header-ul">All Products</Nav.Link>
				</Fragment>	
			)	
		}	
	}


	return(

		<Navbar expand="lg" className="header-nav" sticky="top">
		  <Navbar.Brand href="/" className="header-h2"> 
		  JCP Outfit
		      </Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">	
				<CheckUser />
		    </Nav>
		    <Nav>
		          
		          <NavLinks/>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

