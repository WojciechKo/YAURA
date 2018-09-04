import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import { PropTypes } from 'mobx-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import BetList from '../BetList';
import BetDetails from '../BetDetails';
import BetForm from '../BetForm';
import Profile from '../Profile';

import styles from './styles.scss';

class App extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div className={ styles.main }>
            <AppBar position="static">
              <Toolbar className={ styles.header }>
                <div className={ styles.header__menu }>
                  <Button component={ Link } to="/bets/new" color="inherit">
                    Create new bet
                  </Button>
                </div>

                <Link to="/" className={ styles.header__title }>
                  <Typography color="inherit" variant="title">
                    Beth
                  </Typography>
                </Link>

                <div className={ styles.header__menu }>
                  <Button component={ Link } to="/me" color="inherit">
                    Profile
                  </Button>
                </div>
              </Toolbar>
            </AppBar>

            <div className={ styles.content }>
              <Switch>
                <Route exact path="/bets/new" render={ () => <BetForm store={ store } /> } />
                <Route path="/bets/:betHash" component={ BetDetails } />
                <Route path="/me" render={ () => <Profile store={ store } /> } />

                <Route exact path="/" render={ () => <BetList store={ store } /> } />
              </Switch>
            </div>
            <div className={ styles.footer }>
              Footer
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
