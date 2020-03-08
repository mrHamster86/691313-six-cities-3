import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Operation, reducer} from './reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createAPI from './api';

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(Operation.loadOffers());

const root = document.getElementById(`root`);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root);

