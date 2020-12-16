import React, { Component } from 'react';
import Modalnew from './ModalComponent';
import Timestable from './Timestablecomponent';
import Ticketprice from './Ticketpricecomponent';
import Snackprice from './Snackpricecomponent'
import { baseUrl } from '../shared/baseUrl';
import { Container, Row, Col, Button } from 'reactstrap';



class Tickets extends Component {
    
    render() {
        return(
            <React.Fragment>
                 <div > 
                    <Row className="row-content align-items-center ">                       
                        <Col sm={{ size: 'auto', offset: 5 }}>
                        <img className="img-fluid " src={baseUrl + "/image/tickets.jpg"} width="200px" alt="tickets sign" />
                        </Col>                    
                    </Row>
                </div>
                <div className='p-3'>
                <Container className='tablestyle'>
                <Row className="row-content align-items-center  p-3">
                    <Ticketprice />
                </Row>
                </Container>
                </div>
                <div>
                <Container className='tablestyle'>
                <Row className="row-content align-items-center  p-2">
                    <Timestable />
                </Row>
                </Container>
                </div>               
                <Row className="row-content  p-3">              
                    <Col sm={{ size: 'auto', offset: 9 }}>
                        <Modalnew text="Buy Tickets"/>
                    </ Col>
                </Row>
                <div className='snacksign'> 
                    <Row className="row-content align-items-center p-3">
                        <Col></Col>
                        <Col >
                        <img className="img-fluid " src={baseUrl + "/image/nostalgic-hotdog-soda-pop-popcorn-resize.jpg"} alt="old fashioned snack sign" />
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
                <div className=' snacksign p-3'>
                <Container className='tablestyle'>
                <Row className="row-content align-items-center  p-3">
                    <Snackprice />
                </Row>
                </Container>
                <Row className="row-content  p-3">              
                    <Col sm={{ size: 'auto', offset: 9 }}>
                        <Modalnew text="Buy Snacks"/>
                    </ Col>
                </Row>
                </div>               
            </React.Fragment>
        )
    }
}

export default Tickets;