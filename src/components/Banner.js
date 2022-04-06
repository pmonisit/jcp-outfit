import {Fragment} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'


export default function Banner({bannerProp}){

  
  const {title, description, destination, buttonDesc} = bannerProp

	return(
    <div className="container">
      <div className="banner">
        <h1 className="display-4 text-center">{title}</h1>
        <p className="lead text-center">{description}</p>
        <a className="btn btn-outline-primary text-center" href={destination}>{buttonDesc}</a>
      </div>
    </div>
	)
}
//

