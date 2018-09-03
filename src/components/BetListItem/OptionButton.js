import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

class OptionButton extends Component {
  static propTypes = {
    option: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { onClick, option } = this.props;
    onClick(option.id);
  }

  render() {
    const { option } = this.props;
    const { description, value } = option;

    return (
      <Button size="small" onClick={ this.onClick }>
        {description} ({value})
      </Button>
    );
  }
}

export default OptionButton;
