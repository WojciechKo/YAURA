import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';
import ReactPropTypes from 'prop-types';
import classNames from 'classnames/bind';

import BetListItem from '../BetListItem';

import mainStyles from '../../mainStyles.scss';

const cx = classNames.bind(mainStyles);

@observer
class BetList extends Component {
  static propTypes = {
    bets: PropTypes.observableArrayOf(
      ReactPropTypes.shape({
        idx: ReactPropTypes.number.isRequired,
      })
    ).isRequired,
    size: ReactPropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { bets, size } = this.props;

    const betListClass = cx('cardList', [`cardList--${size}`])
    return (
      <div className={ betListClass }>
        { bets.map(bet => <BetListItem { ...bet } key={ bet.id } />) }
      </div>
    );
  }
}

export default BetList;
