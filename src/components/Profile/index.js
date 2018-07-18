import React, { Component} from 'react';
import PropTypes from 'prop-types';

import OwnerInfo from './ownerInfo.js';

class Profile extends Component {
  static propTypes = {
    walletId: PropTypes.string,
    bethOwner: PropTypes.string
  };

  render() {
    const { walletId, bethOwner } = this.props;

    return (
      <div>
        <section>User</section>
        <article>{walletId}</article>

        <OwnerInfo bethOwner={bethOwner}/>
      </div>
    );
  }
}

export default Profile;
