import React, { Component} from 'react';
import PropTypes from 'prop-types';

import OwnerInfo from './ownerInfo.js';

class Profile extends Component {
  static propTypes = {
    walletId: PropTypes.string,
    bethOwner: PropTypes.string
  };

  render() {
    return (
      <div>
        <section>User</section>
        <article>{this.props.walletId}</article>

        <OwnerInfo bethOwner={this.props.bethOwner}/>
      </div>
    );
  }
}

export default Profile;
