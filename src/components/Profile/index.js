import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { betHash } = this.props.match.params;

    return (
      <div>
        User profile!!!
      </div>
    );
  }
}

export default Profile;
