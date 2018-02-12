import React from 'react';
import camera from '../../images/video-camera.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({ user, signOut }) => {
  const displayUser = user.name ? (
    <div className="user-signed-in">
      <h2>
        Hello, <span>{user.name}</span>
      </h2>
      <Link to="/favorites" className="user-link">
        Favorites
      </Link>
      <Link to="/" className="user-link" id='sign-out' onClick={signOut}>
        Sign Out
      </Link>
    </div>
  ) : (
    <div className="user-sign-up">
      <Link to="/login" className="user-link">
        Login
      </Link>
      <div id="bullet-pt" />
      <Link to="/sign-up" className="user-link">
        Create Account
      </Link>
    </div>
  );

  return (
    <header>
      <Link to="/" className="title-cont">
        <img className="logo" alt="logo" src={camera} />
        <h1>
          Movie<span className="title">Tracker</span>
        </h1>
      </Link>
      <div className="menu-mobile">
        <i className="fas fa-bars" id="menu" />
        {displayUser}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func
};

export const mapStateToProps = store => ({
  user: store.user,
  films: store.films
});

export const mapDispatchToProps = dispatch => ({
  signOut: (user, films) => dispatch(signOut(user, films))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
