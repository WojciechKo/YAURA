import React, { Component } from 'react';

class BetDetails extends Component {
  render() {
    const { betHash } = this.props.match.params;

    return (
      <div>
        Bet details!!!
        { betHash }
      </div>
    );
  }
}

export default BetDetails;
