import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  static propTypes = {
    walletId: PropTypes.string
  };

  render() {
    console.log("Render Profile");
    const {walletId} = this.props;

    return (
      <div>
        User profile!!!
        {walletId}
      </div>
    );
  }
}

export default Profile;
