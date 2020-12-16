import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return(
            <React.Fragment >
                <div className="footer">
                <Container>
                    <Row className="row-content p-3">                     
                        <Col > 
                            <text> Sunnyside Theatre 42-17 Queens Blvd, Sunnyside, NY 11104</text>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                    <Col className=" text-center">
                        <a href="https://www.facebook.com">
                                <i className="fa fa-facebook-square fa-2x p-1 nav-color"></i>
                        </a>
                        <a href="https://www.instagram.com">
                                <i className=" fa fa-instagram fa-2x p-1 nav-color"></i>
                        </a>
                    </Col>
                </Row>
                </Container>
                </div>
                <Container>
                    
        </Container>
            </React.Fragment>
        )
    }
}

export default Footer;