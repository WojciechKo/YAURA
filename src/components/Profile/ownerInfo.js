import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class OwnerInfo extends Component {
  static propTypes = {
    owner: PropTypes.string,
    onOwnerChange: PropTypes.func,
  };

  static defaultProps = {
    owner: '',
    onOwnerChange: () => {},
  }

  state = {
    newOwner: '',
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      newOwner: nextProps.owner,
    });
  }

  onOwnerChange = (event) => {
    this.setState({
      newOwner: event.target.value,
    });
  }

  updateOwner = () => {
    const { onOwnerChange } = this.props;
    const { newOwner } = this.state;

    onOwnerChange(newOwner);
  }

  render() {
    const { owner } = this.props;
    const { newOwner } = this.state;

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
            { owner }
          </p>
          <div>
            <input type="text" value={ newOwner } onChange={ this.onOwnerChange } />
          </div>
          <button type="button" onClick={ this.updateOwner }>
            Update owner
          </button>
        </article>
      </Fragment>
    );
  }
}

export default OwnerInfo;
