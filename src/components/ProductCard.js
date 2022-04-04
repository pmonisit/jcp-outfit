import {Fragment, useState, useEffect} from 'react'
import {Container, Card, Row, Col, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./CSS/Product.css";

export default function ProductCard({productProp}){

	const { productName, description, price, _id } = productProp

	return(
		
		<Container className="products-container mb-5" >
		<div className="card">   
					<h2>{productName}</h2>	      
				      <p>{description}</p>
				      <p>&#8369; {price}</p>
				      <button>Add to cart</button>	 
			       
		 </div>
		 </Container > 
			/*<Container >
			
						
						<Card className="card">
		  				<Card.Body>
		    			<Card.Title >{productName}</Card.Title>
		    			<Card.Text>
		      				{description}
		    			</Card.Text>
		    			<Card.Text >
		      				Php: {price}
		    			</Card.Text>
		    			<Button variant="primary">Add to cart</Button>
		  				</Card.Body>
						</Card>
					
				
			</Container>*/
					
			
	)
}
