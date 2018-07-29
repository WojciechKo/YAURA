import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

class BetListItem extends Component {
  static propTypes = {
    hash: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.array,
  };

  render() {
    const { hash, description, options } = this.props;
    return (
      <Card className="betListItem">
        <CardContent>
          <Link to={ `/bets/${hash}` } className="betListItem__header">
            <Typography color="inherit" variant="title">
              {description}
            </Typography>
          </Link>

        </CardContent>
        <CardActions className="betListItem__actions">
          {options.map(option => (
            <Button size="small">
              {option}
            </Button>
          ))}
        </CardActions>
      </Card>
    );
  }
}

export default BetListItem;
