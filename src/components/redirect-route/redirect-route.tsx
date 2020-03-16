import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';

interface Props {
  exact: boolean;
  path: string;
  redirectPath: string;
  isRedirect: boolean;
  render: () => React.ReactNode;
}

const RedirectRoute: React.FC<Props> = (props: Props) => {
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

export default RedirectRoute;
