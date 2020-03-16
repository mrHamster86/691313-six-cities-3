import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {Header} from './header';
import {AuthorizationStatus} from '../../reducer/user/user';

const user = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

describe(`Header components renders`, () => {
  it(`User authorize`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
            user={user}
          />
        </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`User unauthorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Header
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            user={null}
          />
        </Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
