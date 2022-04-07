import {Fragment} from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

import "./css/Banner.css"


export default function Banner(){

  
  // const {title, description, destination, buttonDesc} = bannerProp

	return(
    <Fragment>  
      <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          />
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />

        </Carousel.Item>
    </Carousel>
    <Container className="product-categories">
        <h1>Product Categories</h1>
    </Container>
      
     
 

    </Fragment>
    

    // <div className="container">
    //   <div className="banner">
    //     <h1 className="display-4 text-center">{title}</h1>
    //     <p className="lead text-center">{description}</p>
    //     <a className="btn btn-outline-primary text-center" href={destination}>{buttonDesc}</a>
    //   </div>
    // </div>
	)
}


