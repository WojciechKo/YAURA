import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';

import ContractInfo from './ContractInfo';
import UserInfo from './UserInfo';

import mainStyles from '../../mainStyles.scss';

@observer
class Profile extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    const { bethAddress, walletId, walletBalance, owner, updateOwner } = store;

    return (
      <div className={ `${mainStyles.cardList} ${mainStyles.cardList__big}` }>
        <UserInfo
          className={ mainStyles.card }
          address={ walletId }
          balance={ walletBalance }
        />
        <ContractInfo
          className={ mainStyles.card }
          owner={ owner }
          bethAddress={ bethAddress }
          onOwnerChange={ updateOwner }
        />
      </div>
    );
  }
}

export default Profile;
