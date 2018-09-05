import React, { Component } from 'react';
import { PropTypes, inject, observer } from 'mobx-react';

@inject('store')
@observer
class BetDetails extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

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
