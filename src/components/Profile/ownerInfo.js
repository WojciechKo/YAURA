import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class OwnerInfo extends Component {
  static propTypes = {
    bethOwner: PropTypes.string.isRequired
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
    const { bethOwner } = this.props;
    const { newBethOwner } = this.state;

    return (
      <Fragment>
        <section>
          Update owner of contract
        </section>
        <article>
          <p>
            Current owner hash:
          </p>
          <p>
            { bethOwner }
          </p>
          <div>
            <input type="text" value={ newBethOwner } onChange={ this.onOwnerIdChange } />
          </div>
        </article>
      </Fragment>
    );
  }
}

export default OwnerInfo;
