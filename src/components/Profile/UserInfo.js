import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import mainStyles from '../../mainStyles.scss';

class UserInfo extends Component {
  static propTypes = {
    address: PropTypes.string,
    balance: PropTypes.number,
  };

  static defaultProps = {
    address: undefined,
    balance: undefined,
  }

  render() {
    const { address, balance } = this.props;

    return (
      <Card className={ mainStyles.card }>
        <CardContent className={ mainStyles.card__text }>
          <CardHeader title="User Info" />

          <div>
            <Typography>
              <strong>
                Current wallet:
              </strong>
              {address}
            </Typography>
          </div>

          <div>
            <Typography>
              <strong>
                Balance
              </strong>
              {balance}
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default UserInfo;
