import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Link} from 'react-router-dom';
import AppRoute from '../../AppRoute';
import {getStatus, getUser} from '../../reducer/user/selectors';

export const Header = ({authorizationStatus, user}) => {
  const UserAuth = () => (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.FAVORITES}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span
        className="header__user-name user__name">{user.email}</span>
    </Link>
  );

  const SingInLink = () => (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.LOGIN}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active"
              to={AppRoute.MAIN}>
              <img className="header__logo" src="/img/logo.svg"
                alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <UserAuth/>
                  : <SingInLink/>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getStatus(state),
  user: getUser(state),
});

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.exact({
    "id": PropTypes.number,
    "email": PropTypes.string,
    "name": PropTypes.string,
    "avatar_url": PropTypes.string,
    "is_pro": PropTypes.bool,
  }),
};

export default connect(mapStateToProps, null)(Header);
