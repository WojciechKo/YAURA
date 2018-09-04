import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';

import ContractInfo from './ContractInfo';
import UserInfo from './UserInfo';

import styles from './styles.scss';
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
      <div className={ `${mainStyles.cardList} ${['mainStyles.cardList--big']} ${styles.profile}` }>
        <div className={ styles.userInfo } >
          <UserInfo
            address={ walletId }
            balance={ walletBalance }
          />
        </div>

        <div className={ styles.contractInfo } >
          <ContractInfo
            owner={ owner }
            bethAddress={ bethAddress }
            onOwnerChange={ updateOwner }
          />
        </div>

        <div className={ styles.ownedBets } >
        </div>

        <div className={ styles.participatedBets } >
        </div>
      </div>
    );
  }
}

export default Profile;
