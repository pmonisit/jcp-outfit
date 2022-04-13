import { React, Fragment, useContext, useEffect } from 'react'
import {Navbar, Container, Nav, Form, FormControl, NavDropdown, Button, Image } from 'react-bootstrap'
import UserContext from './../UserContext'

import Cart from "./Cart";
import "./css/AppNavbar.css";

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
					className="header-ul">Logout</Nav.Link>
				</Fragment>
			)
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


	return(

		<Navbar expand="lg" className="header-nav" sticky="top">
		  <Navbar.Brand href="/" className="header-h2"> 
		  JCP Outfit
		      </Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">	
			<Nav.Link href="/" className="header-ul">Home</Nav.Link>
					
					<Nav.Link href="/products" className="header-ul">All Products</Nav.Link>
					<Nav.Link href="/products" className="header-ul">About Us </Nav.Link>
					<Nav.Link href="/products" className="header-ul">Gallery </Nav.Link>
					<Nav.Link href="/products" className="header-ul">Reviews </Nav.Link>
					<Nav.Link href="/products" className="header-ul">Contact Us</Nav.Link>
		    </Nav>
		    <Nav>
		          <Nav.Link  className="header-ul">
				  		<Cart />
		          		</Nav.Link>   
		          <NavLinks/>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	)
}

