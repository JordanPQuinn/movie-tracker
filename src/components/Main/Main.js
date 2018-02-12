import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

export const Main = props => {
  let ensureFavoriteStyles;
  if(props.user.favorites) {
    
    ensureFavoriteStyles = props.user.favorites.map( film => {
      film.favorited = 'favorited';
      return film;
    });
  }

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <CardContainer films={props.films} />}
        />
        <Route
          path="/login"
          render={() => (props.user.name ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/sign-up"
          render={() => (props.user.name ? <Redirect to="/" /> : <Signup />)}
        />
        <Route
          path="/favorites"
          render={() =>
            props.user.name ? 
              <CardContainer films={ensureFavoriteStyles || []} /> : 
              <Redirect to="/" />
          }
        />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    name: PropTypes.string,
    favorites: PropTypes.arrayOf(PropTypes.object)
  })
};

export const mapStateToProps = store => ({
  user: store.user,
  films: store.films
});

export default withRouter(connect(mapStateToProps, null)(Main));
