import React, {Component,} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import OptionField from '../OptionField';

class OptionList extends Component {
  static propTypes = {
    addNewOption: PropTypes.func,
    onRemoveOption: PropTypes.func,
    onChangeOptionValue: PropTypes.func,
    options: PropTypes.array
  }

  addNewOption = () => {
    this.props.addNewOption();
  };

  onRemoveOption = (index) => {
    this.props.onRemoveOption(index);
  };

  onChangeOptionValue = (index, value) => {
    this.props.onChangeOptionValue(index, value);
  };

  render() {
    const {options} = this.props;

    return (
      <div id="options-container">
        <label>
          Options:
          {options.map((option, index) =>
            <div key={"option-container" + index} id={"option-container-" + index}>
              <OptionField key={"opt-field" + index}
                           id={index}
                           onChangeOption={this.onChangeOptionValue}
                           onRemoveOption={this.onRemoveOption}
                           value={this.props.options[index]}
              />
            </div>
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
