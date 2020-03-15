import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/user';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Favorites from './favorites';
import createAPI from '../../api';

const api = createAPI(() => {});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);

const offers = [{
  "city": {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  "preview_image": `img/apartment-1.jpg`,
  "images": [
    `img/apartment-1.jpg`,
    `img/apartment-1.jpg`,
  ],
  "title": `Canal View Prinsengracht`,
  "is_favorite": false,
  "is_premium": false,
  "rating": 3.1,
  "type": `hotel`,
  "bedrooms": 5,
  "max_adults": 7,
  "price": 350,
  "goods": [
    `Baby seat`,
    `Air conditioning`,
    `Towels`,
    `Washer`,
    `Laptop friendly workspace`,
    `Breakfast`,
  ],
  "host": {
    "id": 1,
    "name": `Angelina`,
    "is_pro": true,
    "avatar_url": `img/avatar-angelina.jpg`,
  },
  "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
  "location": {
    latitude: 48.861610000000006,
    longitude: 2.340499,
    zoom: 16,
  },
  "id": 1,
}];

const user = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

describe(`Favorites components renders`, () => {
  it(`Favorites empty  components renders`, () => {
    const store = mockStore({
      [NameSpace.FAVORITES]: {
        favorites: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Favorites/>
          </Router>
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Favorites  components renders`, () => {
    const store = mockStore({
      [NameSpace.FAVORITES]: {
        favorites: offers,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <Favorites/>
          </Router>
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
