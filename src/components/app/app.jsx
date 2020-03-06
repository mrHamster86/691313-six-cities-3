import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import PlaceDetails from '../place-detail/place-detail.jsx';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact patch="/">
            <Main/>
          </Route>
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
