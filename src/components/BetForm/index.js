import React, { Component } from 'react';
import OptionList from '../OptionList'

class BetForm extends Component {
  state = {
    description: 'fdas',
    options: ['Tak', 'Nie']
  };

  onDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  render() {
    const { description } = this.state;

    return (
      <div>
        Form to craete new bet!!!
        <form>
          <label>
            Description:
            <input type="text" value={description} onChange={this.onDescriptionChange} />
          </label>

            <OptionList />
        </form>
      </div>
    );
  }
}

export default BetForm;
