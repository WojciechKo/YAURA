import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import BetListItem from '../BetListItem';

import './styles.scss';

@observer
class BetList extends Component {
  static propTypes = {
    bets: PropTypes.array
  };

  static defaultProps = {
    bets: []
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
