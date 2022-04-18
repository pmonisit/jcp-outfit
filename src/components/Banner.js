import {Fragment} from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./css/Banner.css"


export default function Banner(){

  
  // const {title, description, destination, buttonDesc} = bannerProp

  const navigate = useNavigate()

  function categories(){
    navigate('./products')
  }

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
    <Container className="product-categories" Fluid>
        <h1>Product Categories</h1>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Best Seller </Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Black Shirt</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>White Shirt</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Minimalist Design</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Series Edition</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Anime Edition</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Baybayin Edition</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>KPOP Edition</Button>
          </Col>
        </Row>
        <Row className="last-row">
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Cities Edition</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>JCP Originals</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Tagalog Word Edition</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="outline-secondary" onClick={categories}>Customize Design</Button>
          </Col>
        </Row>
    </Container>

    </Fragment>
	)
}


