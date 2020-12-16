import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Homecomponent';
import Footer from'./Footercomponent';
import Header from './Headercomponent';
import Nowshowing from'./Nowshowingcomponent';
import Tickets from './Ticketscomponent';
import Reviews from './Reviewscomponent';
import "../styles.css";

class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                <Route path='/home' render={() => <Home />} />
                <Route path='/nowshowing' render={() => <Nowshowing />} />
                <Route path='/tickets' render={() => <Tickets />} />
                <Route path='/reviews' render={() => <Reviews />} />
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;