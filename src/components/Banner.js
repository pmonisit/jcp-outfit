import {Fragment} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'


export default function Banner({bannerProp}){

  
  const {title, description, destination, buttonDesc} = bannerProp

	return(
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
        <a className="btn btn-outline-primary" href={destination}>{buttonDesc}</a>
      </div>
    </div>
	)
}

