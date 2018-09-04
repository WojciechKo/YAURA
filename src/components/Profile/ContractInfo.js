import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import styles from './styles.scss';
import mainStyles from '../../mainStyles.scss';

class ContractInfo extends Component {
  static propTypes = {
    owner: PropTypes.string,
    bethAddress: PropTypes.string,
    onOwnerChange: PropTypes.func,
  };

  static defaultProps = {
    owner: '',
    bethAddress: '',
    onOwnerChange: () => {},
  }

  state = {
    newOwner: '',
  }

  onOwnerChange = (event) => {
    this.setState({
      newOwner: event.target.value,
    });
  }

  updateOwner = () => {
    const { onOwnerChange } = this.props;
    const { newOwner } = this.state;

    onOwnerChange(newOwner);
  }

  render() {
    const { bethAddress, owner } = this.props;
    const { newOwner } = this.state;

    return (
      <Card className={ mainStyles.card }>
        <CardContent>
          <CardHeader title="Contract Info" />
          <div>
            <Typography>
              <strong>
                Contract address:
              </strong>
              { bethAddress }
            </Typography>
          </div>

          <div>
            <Typography>
              <strong>
                Contract owner:
              </strong>
              {owner}
            </Typography>
          </div>

          <div>
            <Typography>
              <strong>
                Set new owner:
              </strong>
              <input
                className={ styles.contractInfo__ownerInput }
                type="text"
                value={ newOwner }
                onChange={ this.onOwnerChange }
              />
              <button type="button" onClick={ this.updateOwner }>
                Update owner
              </button>
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ContractInfo;
