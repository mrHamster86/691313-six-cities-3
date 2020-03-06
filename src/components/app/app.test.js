import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`App components renders correctly`, () => {
  const store = mockStore({});
  const tree = renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
