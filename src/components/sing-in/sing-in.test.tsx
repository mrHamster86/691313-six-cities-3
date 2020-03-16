import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import SingIn from './sing-in';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/user';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

it(`SingIn components renders correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <SingIn/>
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return document.createElement(`div`);
        },
      }).toJSON();
  expect(tree).toMatchSnapshot();
});
