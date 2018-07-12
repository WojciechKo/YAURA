import React, { Component } from 'react';

class BetForm extends Component {
  render() {
    const { betHash } = this.props.match.params;

    return (
      <div>
        Form to craete new bet!!!
      </div>
    );
  }
}

export default BetForm;
