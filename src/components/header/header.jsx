import React from 'react';
import PropTypes from 'prop-types';
import NameSpace from '../../reducer/name-space';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/reducer';

const Header = ({authorizationStatus, user}) => {
  const userAuth = () => (
    <a className="header__nav-link header__nav-link--profile"
      href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span
        className="header__user-name user__name">{user.email}</span>
    </a>
  );

  const singInLink = () => (
    <a className="header__nav-link header__nav-link--profile"
      href="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </a>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg"
                alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.AUTH ? userAuth() : singInLink()}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
  user: state[NameSpace.USER].user,
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.exact({
    "id": PropTypes.number,
    "email": PropTypes.string,
    "name": PropTypes.string,
    "avatar_url": PropTypes.string,
    "is_pro": PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
