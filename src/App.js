import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';
import Game from './Game';
import Coupons from './Coupons';
import Profile from './Profile';

import './App.css';



class Clicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.setClicks = this.setClicks.bind(this);
  }

  setClicks(clicks) {
    this.setState({
      clicks: clicks
    })
  }

  render() {
    return (
      <Router>
        <div className="clicker">
        <Route path="/" exact render={props => (
          <Game clicks={this.state.clicks} setClicks={this.setClicks} />
        )} />
        <Route path="/coupons" render={props => (
          <Coupons clicks={this.state.clicks} />
        )} />
        <Route path="/profile" component={Profile} />
        <Menu claimableCoupons={5} />
        </div>
      </Router>
      );
    }
}


export default Clicker;

//Iconit on sivuilta:
//www.flaticon.com/free-icon/burger_1046784
//www.flaticon.com/free-icon/coupon_411816
//www.flaticon.com/free-icon/boy_163801
//



// Tehnyt/Made by Jesse Pohjalainen, tekemässä Ohjelmointikurssia/Going through a programming course.