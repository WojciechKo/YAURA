import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BetListItem from '../BetListItem';

import './styles.scss';

class BetList extends Component {
  static propTypes = {
    bets: PropTypes.array,
  };

  static defaultProps = {
    bets: [
      { hash: 'qwertyuiop', description: 'Kto będzie mistrzem Polski?', options: ['Polska', 'Legia', 'TKS Tomasovia Tak jest!'] },
      { hash: 'asdfghjkl', description: 'Mój ulubiony kolor', options: ['Zielony', 'Czarny', 'TKS Tomasovia Tak jest!'] },
      { hash: 'zxcvbnm', description: 'Tak?', options: ['Tak', 'Tak', 'TKS Tomasovia Tak jest!'] },
    ],
  };

  render() {
    const { bets } = this.props;
    return (
      <div className="betList">
        { bets.map(bet => <BetListItem { ...bet } key={ bet.hash } />) }
      </div>
    );
  }
}

export default BetList;
