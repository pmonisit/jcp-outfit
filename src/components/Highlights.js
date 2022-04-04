import {Card, Row, Col, Button, ProgressBar} from 'react-bootstrap'
import {Fragment} from 'react'
import Image from 'react-bootstrap/Image'


export default function Highlights(){
	return (
	<Fragment>
		<Row className="m-5">
			<Col xs={12} md={4}>
				<ProgressBar now={100} />
			</Col>

			<Col xs={12} md={4}>
				<ProgressBar now={100} />
			</Col>

			<Col xs={12} md={4}>
				<ProgressBar now={100} />	
			</Col>
		</Row>
		
	</Fragment>
	)
}