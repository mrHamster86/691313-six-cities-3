import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './components/app/app';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer/reducer';
import {
  ActionCreator, AuthorizationStatus,
  Operation as UserOperation,
} from './reducer/user/user';
import {Operation as OffersOperation} from './reducer/offers/offers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createAPI from './api';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(OffersOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

const root = document.getElementById(`root`);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root);

