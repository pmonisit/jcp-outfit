import { Fragment } from "react"
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./../components/CSS/Home-Dashboard.css"




export default function HomeDashboard() {

    // const token = localStorage.getItem("token")

	// 		const loggedUser =	fetch(`https://jcp-outfit.herokuapp.com/api/users/profile`, {
	// 				method: "GET",
	// 				headers: {
	// 					"Authorization": `Bearer ${token}`
	// 				}
	// 			})
    //             .then(response => response.json())
    //             .then(response => {
    //                 return response.firstName
    //             })
    return(
        <Container>
            <Fragment>
            {/* <h4>Hello {loggedUser}!</h4> */}
            <h2 className="home-dashboard">
             Welcome to JCP Dashboard
            </h2>
            <Container xs={12} className="categories">
                <Row>
                    <Col > 
                    <Card style={{ width: '18rem' }} className="users">
                        <Card.Body >
                            <Card.Title className="text-center">Users</Card.Title>
                            <Link to={'/user-dashboard'}>Go to Users Board</Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }} className="products">
                        <Card.Body>
                            <Card.Title className="text-center">Products</Card.Title> 
                            <Link to={'/products'}>Go to Products Board</Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }} className="orders">
                        <Card.Body>
                            <Card.Title className="text-center">Orders</Card.Title>
                            <Link to={'/products'}>In Progress</Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>   
        </Container>
        
    )
}