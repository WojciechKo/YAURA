import React, {Component,} from 'react';
import {Link} from 'react-router-dom'
import OptionField from '../OptionField';

class OptionList extends Component {
  state = {
    options: ['', '']
  };

  addNewOption = () => {
    this.setState({
      options: [...this.state.options, '']
    });
  };

  onRemoveOption = (index) => {
    let array = [...this.state.options];

    array.splice(index, 1);
    this.setState({options: array});
  };

  onChangeOptionValue = (index, value) => {
    let array = this.state.options;
    array[index] = value;
    this.setState({options: array});
  };

  render() {
    const {options} = this.state;

    return (
      <div>
        <label>
          Options:
          {options.map((option, index) =>
            <OptionField id={index}
                         onChangeOption={this.onChangeOptionValue}
                         onRemoveOption={this.onRemoveOption}
                         value={this.state.options[index]}
            />
          )}
        </label>

        <label>
          <Link to="#" onClick={this.addNewOption}>Add more</Link>
        </label>
      </div>
    );
  }
}

export default OptionList;
