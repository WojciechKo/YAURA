import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import RealPropTypes from 'prop-types';
import classNames from 'classnames/bind';

import BetListItem from '../BetListItem';

import mainStyles from '../../mainStyles.scss';
import store from '../../stores/MainStore';

const cx = classNames.bind(mainStyles);

@observer
class BetList extends Component {
  static propTypes = {
    bets: PropTypes.observableArrayOf(
      RealPropTypes.shape({
        idx: RealPropTypes.number.isRequired,
      })
    ).isRequired,
    betOnOption: PropTypes.func,
    size: RealPropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
    betOnOption: store.betOnOption
  };

  render() {
    const { bets, betOnOption, size } = this.props;

    const betListClass = cx('cardList', [`cardList--${size}`])

    return (
      <div className={ betListClass }>
        { bets.map(bet => <BetListItem { ...bet } onOptionClick={ betOnOption } key={ bet.id } />) }
      </div>
    );
  }
}

export default BetList;
