import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/reducer';
import AppRoute from '../../AppRoute';

const UnLoginRoute = (props) => {
  const {exact, path, authorizationStatus, render} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return authorizationStatus === AuthorizationStatus.NO_AUTH
          ? render()
          : <Redirect to={AppRoute.MAIN}/>;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});

UnLoginRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(UnLoginRoute);
