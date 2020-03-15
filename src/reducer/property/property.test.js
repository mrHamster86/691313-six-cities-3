import MockAdapter from 'axios-mock-adapter';
import {ActionCreator, ActionType, Operation, reducer} from './property';
import createAPI from '../../api';
import {ActionType as ActionTypeOffers} from '../offers/offers';


const api = createAPI(() => {});

const offers = [
  {
    "city": {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    'preview_image': `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
    "images": [
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
    ],
    "title": `Perfectly located Castro`,
    "is_favorite": true,
    "is_premium": true,
    "rating": 3.1,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 3,
    "price": 277,
    "goods": [
      `Laptop friendly workspace`,
      `Air conditioning`,
      `Baby seat`,
      `Towels`,
      `Breakfast`,
      `Washer`,
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      'is_pro': true,
      "avatar_url": `img/avatar-angelina.jpg`,
    },
    "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    "location": {
      latitude: 51.239402000000005,
      longitude: 6.756314000000001,
      zoom: 16,
    },
    "id": 2,
  }
];

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

const offer = {
  "city": {
    name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
  'preview_image': `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
  "images": [
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
  ],
  "title": `Perfectly located Castro`,
  "is_favorite": true,
  "is_premium": true,
  "rating": 3.1,
  "type": `room`,
  "bedrooms": 1,
  "max_adults": 3,
  "price": 277,
  "goods": [
    `Laptop friendly workspace`,
    `Air conditioning`,
    `Baby seat`,
    `Towels`,
    `Breakfast`,
    `Washer`,
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    'is_pro': true,
    "avatar_url": `img/avatar-angelina.jpg`,
  },
  "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
  "location": {
    latitude: 51.239402000000005,
    longitude: 6.756314000000001,
    zoom: 16,
  },
  "id": 2,
};

it(`Reducer return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    reviews: [],
    nearOffers: [],
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer change reviews`, () => {
    expect(reducer({
      reviews: [],
      nearOffers: [],
    }, {
      type: ActionType.CHANGE_REVIEWS,
      payload: {reviews},
    })).toEqual({
      reviews,
      nearOffers: [],
    });
  });

  it(`Reducer change offers`, () => {
    expect(reducer({
      reviews: [],
      nearOffers: [],
    }, {
      type: ActionType.CHANGE_NEAR_OFFERS,
      payload: {nearOffers: offers},
    })).toEqual({
      reviews: [],
      nearOffers: offers,
    });
  });

  it(`Reducer change offer`, () => {
    expect(reducer({
      reviews: [],
      nearOffers: offers,
    }, {
      type: ActionType.CHANGE_NEAR_OFFER,
      payload: {offer},
    })).toEqual({
      reviews: [],
      nearOffers: offers,
    });
  });

  it(`Reducer reset state`, () => {
    expect(reducer({
      reviews: [],
      nearOffers: [],
    }, {
      type: ActionType.RESET,
      payload: null,
    })).toEqual({
      reviews: [],
      nearOffers: [],
    });
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`changeReviews work correctly`, () => {
    expect(ActionCreator.changeReviews(reviews)).toEqual({
      type: ActionType.CHANGE_REVIEWS,
      payload: {reviews},
    });
  });

  it(`changeNearOffers work correctly`, () => {
    expect(ActionCreator.changeNearOffers(offers)).toEqual({
      type: ActionType.CHANGE_REVIEWS,
      payload: {nearOffers: offers},
    });
  });

  it(`changeNearOffer work correctly`, () => {
    expect(ActionCreator.changeNearOffer(offer)).toEqual({
      type: ActionType.CHANGE_NEAR_OFFER,
      payload: {offer},
    });
  });

  it(`reset work correctly`, () => {
    expect(ActionCreator.reset()).toEqual({
      type: ActionType.RESET,
      payload: null,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct download reviews, API call to /comments/:hotel_id`, function () {
    const id = 2;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loaderReviews = Operation.loadReviews(id);

    apiMock
    .onGet(`/comments/2`)
    .reply(200, reviews);

    return loaderReviews(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_REVIEWS,
        payload: {reviews}
      });
    });
  });

  it(`Should make a correct download nearOffer, API call to /hotels/:hotel_id/nearby`, function () {
    const id = 25;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loaderOffers = Operation.loadNearOffers(id);

    apiMock
    .onGet(`/hotels/25/nearby`)
    .reply(200, offers);

    return loaderOffers(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_REVIEWS,
        payload: {nearOffers: offers}
      });
    });
  });

  it(`Should make a correct API call to /favorite/:hotel_id/:status`, function () {
    const id = 25;
    const status = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const uploadFavorite = Operation.setFavorites(id, status);

    apiMock
    .onPost(`/favorite/25/1`)
    .reply(200, offer);

    return uploadFavorite(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypeOffers.CHANGE_OFFER,
        payload: {offer},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_NEAR_OFFER,
        payload: {offer},
      });
    });
  });
});
