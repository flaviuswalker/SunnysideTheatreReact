import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Container, Row
  } from 'reactstrap';
  import { baseUrl } from '../shared/baseUrl';
  import { NavLink } from 'react-router-dom';


class Noshowing extends Component {
    render() {
        return(
            <React.Fragment>
                 <Container>
                     <Row className="row-content align-items-center p-5">
                        <CardDeck>
                            <Card>
                                <CardImg top width="100%" src={baseUrl + "/image/After-hours_POSTER RESIZE.jpg"} alt="after hours poster" />
                                <CardBody>
                                <CardTitle tag="h5">After Hours</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Martin Scorsese</CardSubtitle>
                                <CardText>An ordinary word processor has the worst night of his life after he agrees to visit a girl in Soho who he met that evening at a coffee shop.</CardText>
                                <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/tickets"><Button color="success">Buy Tickets</Button></NavLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src={baseUrl + "/image/Dayofthedead1POSTERESIZE.jpg"} alt="day of the dead poster" />
                                <CardBody>
                                <CardTitle tag="h5">Day of the Dead</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">George A. Romero</CardSubtitle>
                                <CardText>A small group of military officers and scientists dwell in an underground bunker as the world above is overrun by zombies.</CardText>
                                <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/tickets"><Button color="success">Buy Tickets</Button></NavLink>
                                </CardBody>
                            </Card>                    
                    </CardDeck>
                    </Row>
                    <Row className="row-content align-items-center p-5">
                        <CardDeck>
                            <Card>
                                <CardImg top width="100%" src={baseUrl + "/image/Goonies_POSTER_RESIZE.jpg"} alt="Goonies poster" />
                                <CardBody>
                                <CardTitle tag="h5">The Goonies</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Richard Donner</CardSubtitle>
                                <CardText>A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.</CardText>
                                <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/tickets"><Button color="success">Buy Tickets</Button></NavLink>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardImg top width="100%" src={baseUrl + "/image/TeenWolfPOSTERRESIZE.jpg"} alt="teen wolf poster" />
                                <CardBody>
                                <CardTitle tag="h5">Teen Wolf</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Rod Daniel</CardSubtitle>
                                <CardText>An ordinary high school student discovers that his family has an unusual pedigree when he finds himself turning into a werewolf.</CardText>
                                <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/tickets"><Button color="success">Buy Tickets</Button></NavLink>                                
                                </CardBody>
                            </Card>                    
                    </CardDeck>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Noshowing;