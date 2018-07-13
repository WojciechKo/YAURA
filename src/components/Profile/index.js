import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  static propTypes = {
    walletId: PropTypes.string,
    bethOwner: PropTypes.string
  };

  state = {
    newBethOwner: ''
  }

  onOwnerIdChange = (event) => {
    this.setState({
      newBethOwner: event.target.value
    });
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      newBethOwner: nextProps.bethOwner
    });
  }

  render() {
    return (
      <div>
        <section>User</section>
        <article>{this.props.walletId}</article>

        <section>Update owner of contract</section>
        <article>
          Current owner hash: { this.props.bethOwner }
          <input type="text" value={this.state.newBethOwner} onChange={this.onOwnerIdChange}/>
        </article>
      </div>
    );
  }
}

export default Profile;
