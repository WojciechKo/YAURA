import React, {Component} from 'react';
import OptionList from '../OptionList';

class BetForm extends Component {
  state = {
    description: '',
    options: ['', '']
  };

  onDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  };

  addNewOption = () => {
    this.setState({
      options: [...this.state.options, '']
    });
  };

  onRemoveOption = (index) => {
    let array = [...this.state.options];

    if(array.length === 2){
      return false;
    }

    array.splice(index, 1);
    this.setState({options: array});
  };

  onChangeOptionValue = (index, value) => {
    let array = this.state.options;
    array[index] = value;
    this.setState({options: array});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate_form()) {
      console.log('Oh Yeah')
    } else {
      console.log('No!')
    }

    console.log(this.state);
  };

  validate_form = () => {
    let err = 0;
    if (this.state.description ==='') {
      console.log('oh no');
      err++;
    }

    this.state.options.map((option) => {
        if (option === '') {
          console.log('options!!!!');
          err++;
        }
      }
    );

    if(err > 0){ return false; }
    return true;
  };

  render() {
    const {description} = this.state;

    return (
      <div id="create-form">
        Form to craete new bet!!!
        <form onSubmit={this.handleSubmit}>
          <div id="description-container">
            <label>
              <p>Description:</p>

              <input className="form-description" type="text" name="description" value={description}
                     onChange={this.onDescriptionChange}/>
            </label>
          </div>

          <OptionList addNewOption={this.addNewOption}
                      onRemoveOption={this.onRemoveOption}
                      onChangeOptionValue={this.onChangeOptionValue}
                      options={this.state.options}
          />
          <input type="submit" value="Save" className="button"/>
        </form>
      </div>
    );
  }
}

export default BetForm;
