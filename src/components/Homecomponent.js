import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import  Carousel from './Carouselcomponent';
import { baseUrl } from '../shared/baseUrl';
import { NavLink } from 'react-router-dom';



class Home extends Component {
    render() {
        return(
            <React.Fragment>
               <Container>                   
                    <Row className="row-content align-items-center p-5">
                        <Col >
                        <img className="img-fluid photo"  src={baseUrl + "/image/theatre_b&w.jpg"} alt="sunnyside theatre seating" />
                        </Col>
                    </Row>
                    <Row className="row-content">
                        <Col className="text">
                            <p>Welcome to Sunnyside Theatre. We saved you a seat!</p>
                        </Col>
                    </Row>
               </Container>
               <div className="carousel">
                <Container >
                    <Row className="row-content p-2">
                        <Col></Col>
                        <Col>
                        <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/nowshowing"><img className="img-fluid"  src={baseUrl + "/image/nowshowing.jpg"} alt="now showing" width="500px" /></NavLink>                            
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="row-content p-2">
                        <Col>
                        <Carousel />
                        </Col>
                    </Row>
                    <Row className="row-content  p-3">                
                            <Col className="comingsoon">
                            <text >Coming Soon</text>
                            </Col>                       
                    </Row>
                    <Row className="row-content align-items-center p-2">
                    <Col></Col>
                        <Col>
                        <img className="img-fluid"  src={baseUrl + "/image/FerrisBuellerPoster.jpg"} alt="ferris bueller poster" width="300px"/>
                        </Col>
                        <Col >
                        <img className="img-fluid"  src={baseUrl + "/image/AliensPoster.jpg"} alt="aliens 1986 poster" width="300px" />
                        </Col>
                    <Col></Col>
                    </Row>
                </Container>
               </div>
            </React.Fragment>
        )
    }
}

export default Home;