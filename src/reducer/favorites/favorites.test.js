import MockAdapter from 'axios-mock-adapter';
import {ActionCreator, ActionType, Operation, reducer} from './favorites';
import createAPI from '../../api';
import {ActionType as ActionTypeOffers} from '../offers/offers';


const api = createAPI(() => {});
const favorites = [
  {
    "city": {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    'preview_image': `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
    "images": [
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
    ],
    "title": `Nice, cozy, warm big bed apartment`,
    "is_favorite": false,
    "is_premium": true,
    "rating": 4.5,
    "type": `house`,
    "bedrooms": 3,
    "max_adults": 3,
    "price": 302,
    "goods": [
      `Breakfast`,
      `Laptop friendly workspace`,
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      'avatar_url': `img/avatar-angelina.jpg`,
    },
    "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    "location": {
      latitude: 53.573341000000006,
      longitude: 9.994654,
      zoom: 16,
    },
    "id": 1,
  },
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
  },
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
    favorites: [],
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer update favorites`, () => {
    expect(reducer({
      favorites: [],
    }, {
      type: ActionType.SET_FAVORITES,
      payload: {favorites},
    })).toEqual({
      favorites,
    });
  });

  it(`Reducer reset state`, () => {
    expect(reducer({
      favorites,
    }, {
      type: ActionType.RESET,
      payload: null,
    })).toEqual({
      favorites: [],
    });
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`setFavorites work correctly`, () => {
    expect(ActionCreator.setFavorites(favorites)).toEqual({
      type: ActionType.SET_FAVORITES,
      payload: {favorites},
    });
  });

  it(`changeFavorite work correctly`, () => {
    expect(ActionCreator.changeFavorite(offer)).toEqual({
      type: ActionType.CHANGE_FAVORITES_OFFER,
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
  it(`Should make a correct API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = Operation.load();

    apiMock
    .onGet(`/favorite`)
    .reply(200, favorites);

    return favoritesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FAVORITES,
        payload: {favorites},
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
        type: ActionType.CHANGE_FAVORITES_OFFER,
        payload: {offer},
      });
    });
  });
});
