import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import SingIn from '../sing-in/sing-in.jsx';
import AppRoute from '../../AppRoute';
import UnLoginRoute from '../unlogin-route/unlogin-route.jsx';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN}><Main/></Route>
          <UnLoginRoute
            exact
            path={AppRoute.LOGIN}
            render={() => <SingIn/>}
          />
          {/*<Route exact patch="/dev-component">*/}
          {/*  <PlaceDetails/>*/}
          {/*</Route>*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default App;
