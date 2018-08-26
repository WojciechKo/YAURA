import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class OptionField extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onChangeOption: PropTypes.func.isRequired,
    onRemoveOption: PropTypes.func.isRequired,
  };

  onTextChange = (event) => {
    const { onChangeOption, index } = this.props;

    onChangeOption(index, event.target.value);
  };

  onRemoveOption = () => {
    const { onRemoveOption, index } = this.props;

    onRemoveOption(index);
  };

  render() {
    const { text, index } = this.props;

    return (
      <div>
        <TextField
          label={ `Option ${index + 1} ` }
          name="options[]"
          value={ text }
          onChange={ this.onTextChange }
        />

        <Button variant="contained" onClick={ this.onRemoveOption }>
          -
        </Button>
      </div>
    );
  }
}

export default OptionField;
