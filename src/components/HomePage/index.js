import React, { Component } from 'react';
import { PropTypes, observer, inject } from 'mobx-react';

import BetList from '../BetList';

@inject('store')
@observer
class HomePage extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    return <BetList bets={ store.bets } />
  }
}

export default HomePage;
