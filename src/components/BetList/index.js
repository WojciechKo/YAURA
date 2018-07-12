import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import BetListItem from '../BetListItem';

class BetList extends Component {
  static defaultProps = {
    bets: [
      {hash: 'qwertyuiop', description: "Kto będzie mistrzem Polski?", options: ["Polska", "Legia", "TKS Tomasovia Tak jest!"]},
      {hash: 'asdfghjkl', description: "Mój ulubiony kolor", options: ["Zielony", "Czarny", "TKS Tomasovia Tak jest!"]},
      {hash: 'zxcvbnm', description: "Tak?", options: ["Tak", "Tak", "TKS Tomasovia Tak jest!"]},
    ]
  };

  static propTypes = {
    bets: PropTypes.array
  };

  render() {
    const { bets } = this.props;

    return (
      <div>
        { bets.map((bet) => <BetListItem {...bet} />) }
      </div>
    );
  }
}

export default BetList;
