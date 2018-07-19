import React, { Component } from 'react';
import { PropTypes, observer } from 'mobx-react';

import OwnerInfo from './ownerInfo.js';

@observer
class Profile extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;
    const { walletId, owner, updateOwner } = store;

    return (
      <div>
        <section>
          User
        </section>
        <article>
          {walletId}
        </article>

        <OwnerInfo owner={ owner } onOwnerChange={ updateOwner } />
      </div>
    );
  }
}

export default Profile;
