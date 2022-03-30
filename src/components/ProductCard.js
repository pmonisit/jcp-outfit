import {Fragment, useState, useEffect} from 'react'
import {Container, Card, Row, Col, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function ProductCard({productProp}){

	const { productName, description, price, _id } = productProp

	return(
		<Container>	
				<Row>
					<Col>	
						<Card className="m-5" style={{ width: '18rem' }}>
		 				<Card.Img variant="top" src="holder.js/100px180" />
		  				<Card.Body>
		    			<Card.Title>{productName}</Card.Title>
		    			<Card.Text>
		      				{description}
		    			</Card.Text>
		    			<Card.Text>
		      				Php: {price}
		    			</Card.Text>
		    			<Button variant="primary">Add to cart</Button>
		  				</Card.Body>
						</Card>
					</Col>		
				</Row>
		</Container>	
	)
}