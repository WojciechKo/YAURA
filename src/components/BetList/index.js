import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';

import BetListItem from '../BetListItem';

import mainStyles from '../../mainStyles.scss';

@observer
class BetList extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    const { bets, betOnOption } = store;

    return (
      <div className={ `${mainStyles.cardList} ${mainStyles['cardList--small']}` }>
        { bets.map(bet => <BetListItem { ...bet } onOptionClick={ betOnOption } key={ bet.id } />) }
      </div>
    );
  }
}

export default BetList;
