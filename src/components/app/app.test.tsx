import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space';
import {OFFERS_SORT_ITEMS} from '../../constatnts';
import {AuthorizationStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);
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

it(`App components renders correctly`, () => {
  const store = mockStore({
    [NameSpace.OFFERS]: {
      city: `Amsterdam`,
      offers,
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

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
