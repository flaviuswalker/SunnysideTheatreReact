import React, { Component }  from 'react';
import { Nav, Navbar, NavItem, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
}

    render() {
        return(
            <React.Fragment >
                    <Navbar className="navbar navbar-expand-md navbar-light relative">
                    <NavbarBrand className="d-block d-md-none" href="#">
                        <img src={baseUrl + "/image/Logo.jpg"} width="450" alt="sunnyside theatre logo" />
                    </NavbarBrand>
                        <div className="container">            
                            <Nav navbar>
                                <NavItem className="flex-box"> 
                                    <NavLink className="nav-color" style={{ textDecoration: 'none' }}  to="/home">Home</NavLink>
                                 </NavItem>
                                 <NavItem className="flex-box"> 
                                    <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/nowshowing">Now Showing</NavLink>
                                 </NavItem>
                                <NavbarBrand className="mx-auto d-none d-md-flex" href="#">
                                    <img src={baseUrl + "/image/Logo.jpg"} width="450" alt="sunnyside theatre logo"/>
                                </NavbarBrand>
                                <NavItem className="flex-box"> 
                                    <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/tickets">Tickets</NavLink>
                                 </NavItem>
                                 <NavItem className="flex-box"> 
                                    <NavLink className="nav-color" style={{ textDecoration: 'none' }} to="/reviews">Reviews</NavLink>
                                 </NavItem>
                            </Nav>
                        </div>
                    </ Navbar>
            </React.Fragment>
        )
    }
}

export default Header;