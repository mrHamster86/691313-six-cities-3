import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {reducer} from './reducer';
import {Provider} from 'react-redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f);

const root = document.getElementById(`root`);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root);

