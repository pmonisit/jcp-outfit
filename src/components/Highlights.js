import {Card, Row, Col, Button} from 'react-bootstrap'
import {Fragment} from 'react'


export default function Highlights(){
	return (
	<Fragment>
		<Row className="m-5">
			<Col xs={12} md={4}>
				<Card>
				  <Card.Body>
				    <Card.Title>Design</Card.Title>
				    <Card.Text>
				      	Design your own shirt by choosing the color, size, style, and designs OR we can design it for you.
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card>
				  <Card.Body>
				    <Card.Title>Print</Card.Title>
				    <Card.Text>
				     	We'll print your design using DTF - a revolutionary new printing technique that's more affordable and accessible compared to transfer paper or vinyl transfer. This is the newest innovation in printing. 
				    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card>
				  <Card.Body>
				    <Card.Title>Wear</Card.Title>
				    <Card.Text>
				      	Wear your customized and 100% cotton shirt.
				    </Card.Text>
				  </Card.Body>
				</Card>		
			</Col>
		</Row>
	</Fragment>
	)
}