import React, { Component } from 'react';
import { PropTypes, inject, observer } from 'mobx-react';
import ReactPropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import OptionButton from './OptionButton';
import mainStyles from '../../mainStyles.scss';

@inject('store')
@observer
class BetListItem extends Component {
  static propTypes = {
    id: ReactPropTypes.number.isRequired,
    description: ReactPropTypes.string.isRequired,
    options: ReactPropTypes.arrayOf(
      ReactPropTypes.shape({
        id: ReactPropTypes.number.isRequired,
        description: ReactPropTypes.string.isRequired,
        value: ReactPropTypes.number.isRequired
      })
    ).isRequired,
    store: PropTypes.observableObject.isRequired,
  };

  onOptionButtonClick = (optionId) => {
    const { store, id } = this.props;
    store.betOnOption(id, optionId, 500000);
  }

  render() {
    const { id, description, options } = this.props;

    return (
      <Card className={ mainStyles.card }>
        <CardContent>
          <Link to={ `/bets/${id}` } className={ mainStyles.card__header }>
            <Typography color="inherit" variant="title">
              {description}
            </Typography>
          </Link>

        </CardContent>
        <CardActions className={ mainStyles.card__actions }>
          {options.map(option => (
            <OptionButton
              option={ option }
              key={ option.id }
              onClick={ this.onOptionButtonClick }
            />
          ))}
        </CardActions>
      </Card>
    );
  }
}

export default BetListItem;
