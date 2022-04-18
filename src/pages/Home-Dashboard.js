import { Fragment } from "react"
import { Container } from "react-bootstrap"
import "./../components/css/Home-Dashboard.css"



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
        </Fragment>   
        </Container>
        
    )
}