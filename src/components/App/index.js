import React, { Component } from 'react';
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import BetList from '../BetList';
import BetDetails from '../BetDetails';

import logo from './logo.svg';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Link to="/">App Logo</Link>
        </div>
        <div className="content">
          <Route exact path="/" component={BetList}/>
          <Route path="/bets/:betHash" component={BetDetails}/>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;
