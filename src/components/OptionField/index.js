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
      <Fragment>
        <input className="option-input" key={"option"+this.props.id} name={"name" + this.props.id} type="text" onChange={this.onTextChange} value={this.props.value}/>
        <a key={"remove_option"+this.props.id} onClick={this.onRemove}>[-]</a>
      </Fragment>
    );
  }
}

export default OptionField;
