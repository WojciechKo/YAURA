import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class OwnerInfo extends Component {
  static propTypes = {
    bethOwner: PropTypes.string,
  };

  state = {
    newBethOwner: '',
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      newBethOwner: nextProps.bethOwner,
    });
  }

  onOwnerIdChange = (event) => {
    this.setState({
      newBethOwner: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <section>
          Update owner of contract
        </section>
        <article>
          Current owner hash:
          {' '}
          { this.props.bethOwner }
          <input type="text" value={ this.state.newBethOwner } onChange={ this.onOwnerIdChange } />
        </article>
      </Fragment>
    );
  }
}

export default OwnerInfo;
