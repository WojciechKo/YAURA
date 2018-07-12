import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BetList extends Component {
  render() {
    return (
      <div>
        Bet List!!!
        <Link to="/bets/1234567">Bet details</Link>
      </div>
    );
  }
}

export default BetList;
