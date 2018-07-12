import React, { Component } from 'react';

class BetForm extends Component {
  state = {
    description: 'fdas',
    options: ['Tak', 'Nie']
  }

  onDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  render() {
    const { description, options } = this.state;

    return (
      <div>
        Form to craete new bet!!!
        <form>
          <label>
            Description:
            <input type="text" value={description} onChange={this.onDescriptionChange.bind(this)} />
          </label>

          <label>
            Options:
            { options.map((option) => <input type="text" value={option}/>) }
          </label>
        </form>
      </div>
    );
  }
}

export default BetForm;
