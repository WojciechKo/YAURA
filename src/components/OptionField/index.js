import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class OptionField extends Component {
  static propTypes = {
    onChangeOption: PropTypes.func,
    onRemoveOption: PropTypes.func,
    value: PropTypes.string,
    id: PropTypes.number
  };

  onTextChange = (event) => {
    this.props.onChangeOption(this.props.id, event.target.value);
  };

  onRemove = () => {
    this.props.onRemoveOption(this.props.id);
  };

  render() {
    return (
      <Fragment key={this.props.id}>
        <input type="text" onChange={this.onTextChange} value={this.props.value}/>
        <a href="#" onClick={this.onRemove}>[-]</a>
      </Fragment>
    );
  }
}

export default OptionField;
