import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../reducer/user/user';
import OfferDetail from './offer-detail';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import createAPI from '../../api';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {noop} from "../../utils";

const api = createAPI(noop);
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
const reviews = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];
const user = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

describe(`Property components renders`, () => {
  const apiMock = new MockAdapter(api);
  apiMock
  .onGet(`/comments/${offers[0].id}`)
  .reply(200, reviews);

  apiMock
  .onGet(`hotels/${offers[0].id}/nearby`)
  .reply(200, offers);

  it(`User authorize`, () => {
    const store = mockStore({
      [NameSpace.OFFERS]: {
        offers,
      },
      [NameSpace.PROPERTY]: {
        reviews: [],
        nearOffers: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
      [NameSpace.REVIEW]: {
        rating: 0,
        review: `test`
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OfferDetail
              offerId={1}
            />
          </Router>
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`User unauthorized`, () => {
    const store = mockStore({
      [NameSpace.OFFERS]: {
        offers,
      },
      [NameSpace.PROPERTY]: {
        reviews: [],
        nearOffers: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <Router history={history}>
            <OfferDetail
              offerId={1}
            />
          </Router>
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
