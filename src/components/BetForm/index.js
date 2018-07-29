import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import OptionList from '../OptionList';

class BetForm extends Component {
  state = {
    description: '',
    options: ['', ''],
  };

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onRemoveOption = (index) => {
    this.setState((prevState) => {
      const filteredOptions = [
        ...prevState.options.slice(0, index),
        ...prevState.options.slice(index + 1),
      ];
      return { options: filteredOptions };
    });
  };

  onChangeOptionValue = (index, value) => {
    this.setState((prevState) => {
      const updatedOptions = [
        ...prevState.options.slice(0, index),
        value,
        ...prevState.options.slice(index + 1),
      ];
      return { options: updatedOptions };
    });
  };

  addNewOption = () => {
    this.setState(prevState => (
      { options: [...prevState.options, ''] }
    ));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate_form()) {
      console.log('Oh Yeah');
    } else {
      console.log('No!');
    }

    console.log(this.state);
  };

  validate_form = () => {
    let err = 0;
    if (this.state.description === '') {
      console.log('oh no');
      err++;
    }

    this.state.options.map((option) => {
      if (option === '') {
        console.log('options!!!!');
        err++;
      }
    });

    if (err > 0) { return false; }
    return true;
  };

  render() {
    const { description, options } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        Create a new bet
        <label>
          Description:
          <input
            className="form-description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.onDescriptionChange }
          />
        </label>

        <OptionList
          options={ options }
          addNewOption={ this.addNewOption }
          onRemoveOption={ this.onRemoveOption }
          onChangeOptionValue={ this.onChangeOptionValue }
        />
        <Button variant="contained" color="primary">
          Save
        </Button>
      </form>
    );
  }
}

export default BetForm;
