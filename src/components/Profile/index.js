import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';

import OwnerInfo from './ownerInfo.js';
import UserInfo from './UserInfo.js';

import mainStyles from '../../mainStyles.scss';

@observer
class Profile extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    const { walletId, walletBalance, owner, updateOwner } = store;

    return (
      <div className={ `${mainStyles.cardList} ${mainStyles.cardList__big}` }>
        <UserInfo
          className={ mainStyles.card }
          address={ walletId }
          balance={ walletBalance }
        />


        <OwnerInfo owner={ owner } onOwnerChange={ updateOwner } />
      </div>
    );
  }
}

export default Profile;
