import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import RealPropTypes from 'prop-types';
import classNames from 'classnames/bind';

import BetListItem from '../BetListItem';

import mainStyles from '../../mainStyles.scss';

const cx = classNames.bind(mainStyles);

@observer
class BetList extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
    size: RealPropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium'
  };

  render() {
    const { store, size } = this.props;
    const { bets, betOnOption } = store;

    const betListClass = cx('cardList', [`cardList--${size}`])

    return (
      <div className={ betListClass }>
        { bets.map(bet => <BetListItem { ...bet } onOptionClick={ betOnOption } key={ bet.id } />) }
      </div>
    );
  }
}

export default BetList;
