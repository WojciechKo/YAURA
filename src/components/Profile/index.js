import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';

import Typography from '@material-ui/core/Typography';

import BetList from '../BetList';
import ContractInfo from './ContractInfo';
import UserInfo from './UserInfo';

import mainStyles from '../../mainStyles.scss';
import styles from './styles.scss';

@observer
class Profile extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    const { bethAddress, walletId, walletBalance, owner, updateOwner } = store;

    return (
      <div className={ `${mainStyles.cardList} ${['mainStyles.cardList--large']} ${styles.profile}` }>
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
          <Typography color="textSecondary" variant="title" align="center">
            Owned bets
          </Typography>

          <BetList store={ store } size="small"/>
        </div>

        <div className={ styles.participatedBets } >
          <Typography color="textSecondary" variant="title" align="center">
            Participated bets
          </Typography>

          <BetList store={ store } size="small"/>
        </div>
      </div>
    );
  }
}

export default Profile;
