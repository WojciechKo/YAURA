import React, { Component } from 'react';
import { PropTypes, inject, observer } from 'mobx-react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import OptionField from '../OptionField';

import styles from './styles.scss'

@inject('store')
@observer
class BetForm extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  state = {
    description: '',
    options: ['', ''],
  };

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeOption = (index, value) => {
    this.setState((prevState) => {
      const updatedOptions = [
        ...prevState.options.slice(0, index),
        value,
        ...prevState.options.slice(index + 1),
      ];
      return { options: updatedOptions };
    });
  };

  onRemoveOption = (index) => {
    this.setState((prevState) => {
      if (prevState.options.length === 1) return {};
      const filteredOptions = [
        ...prevState.options.slice(0, index),
        ...prevState.options.slice(index + 1),
      ];
      return { options: filteredOptions };
    });
  };

  addNewOption = () => {
    this.setState(prevState => (
      { options: [...prevState.options, ''] }
    ));
  };

  createNewBet = () => {
    const { store } = this.props;
    const { description, options } = this.state;

    store.createBet(description, options);
  }

  render() {
    const { description, options } = this.state;

    return (
      <Card>
        <form className={ styles.form }>
          <Typography color="inherit" variant="title">
            Create a new bet
          </Typography>

          <div>
            <TextField
              label="Description"
              name="description"
              value={ description }
              onChange={ this.onDescriptionChange }
            />
            <Button onClick={ this.addNewOption } variant="contained" color="primary">
              Add New Option
            </Button>
          </div>

          {options.map((option, index) => (
            <OptionField
              index={ index }
              text={ option }
              onChangeOption={ this.onChangeOption }
              onRemoveOption={ this.onRemoveOption }
            />
          ))}

          <Button onClick={ this.createNewBet } variant="contained" color="primary">
            Create new Bet
          </Button>
        </form>
      </Card>
    );
  }
}

export default BetForm;
