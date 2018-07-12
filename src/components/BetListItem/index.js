import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class BetListItem extends Component {
  propTypes = {
    hash: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array
  };

  render() {
    const { hash, description, options } = this.props;
    return (
      <div>
        <Link to={`/bets/${hash}`}>{description}</Link>
        { options.map((option) => <p>{option}</p>) }
      </div>
    );
  }
}

export default BetListItem;
