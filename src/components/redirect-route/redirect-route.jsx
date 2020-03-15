import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

const RedirectRoute = (props) => {
  const {exact, path, redirectPath, isRedirect, render} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return isRedirect
          ? <Redirect to={redirectPath}/>
          : render();
      }}
    />
  );
};

RedirectRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  isRedirect: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

export default RedirectRoute;
