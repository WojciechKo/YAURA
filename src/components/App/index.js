import React, {Component} from 'react';
import {Switch, Route} from 'react-router'

import {Link, BrowserRouter} from 'react-router-dom'

import BetList from '../BetList';
import BetDetails from '../BetDetails';
import BetForm from '../BetForm';
import Profile from '../Profile';

import './styles.css';

import { mainStore } from '../../stores/MainStore'
import { observer } from "mobx-react"

@observer
class App extends Component {
  render() {
    const walletId = mainStore.walletId;

    return (
      <BrowserRouter>
        <div className="container">
          <div className="header">
            <ul className="menu">
              <li><Link to="/" className="button">App Logo</Link></li>
              <li><Link to="/bets/new" className="button">New bet!</Link></li>
              <li><Link to="/me" className="button">Profile</Link></li>
            </ul>
          </div>


          <div className="content">
            <Switch>
              <Route exact path="/bets/new" component={BetForm}/>
              <Route path="/bets/:betHash" component={BetDetails}/>
              <Route path="/me" render={() => <Profile walletId={walletId}/>}/>

              <Route exact path="/" component={BetList}/>
            </Switch>
          </div>
          <div className="footer">
            Footer
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;