import MockAdapter from 'axios-mock-adapter';
import {ActionCreator, ActionType, Operation, reducer} from './offers';
import createAPI from '../../api';
import {OFFERS_SORT_ITEMS} from '../../constatnts';


const api = createAPI(() => {});
const offers = [
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
];

const offer = {
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
  "is_favorite": true,
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
};

it(`Reducer return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: `Amsterdam`,
    offers: [],
    sort: OFFERS_SORT_ITEMS[0],
    activeOffer: -1,
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer change city`, () => {
    const city = `Paris`;
    expect(reducer({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: {city},
    })).toEqual({
      city,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    });
  });

  it(`Reducer change sort`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    }, {
      type: ActionType.CHANGE_SORT,
      payload: {sort: OFFERS_SORT_ITEMS[1]},
    })).toEqual({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[1],
      activeOffer: -1,
    });
  });

  it(`Reducer change active`, () => {
    const activeOffer = 1;
    expect(reducer({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    }, {
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: {activeOffer},
    })).toEqual({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer,
    });
  });

  it(`Reducer change offers`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers: [],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    }, {
      type: ActionType.CHANGE_OFFERS,
      payload: {offers},
    })).toEqual({
      city: `Amsterdam`,
      offers,
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    });
  });

  it(`Reducer change offer`, () => {
    expect(reducer({
      city: `Amsterdam`,
      offers,
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    }, {
      type: ActionType.CHANGE_OFFER,
      payload: {offer},
    })).toEqual({
      city: `Amsterdam`,
      offers: [offer],
      sort: OFFERS_SORT_ITEMS[0],
      activeOffer: -1,
    });
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`changeCity work correctly`, () => {
    const city = `Paris`;
    expect(ActionCreator.changeCity(city)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {city}
    });
  });

  it(`changeSort work correctly`, () => {
    const sort = OFFERS_SORT_ITEMS[1];
    expect(ActionCreator.changeSort(sort)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: {sort},
    });
  });

  it(`changeActiveOffer work correctly`, () => {
    expect(ActionCreator.changeActiveOffer(offer.id)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER,
      payload: {activeOffer: offer.id},
    });
  });

  it(`changeOffers work correctly`, () => {
    expect(ActionCreator.changeOffers(offers)).toEqual({
      type: ActionType.CHANGE_OFFERS,
      payload: {offers},
    });
  });

  it(`changeOffer work correctly`, () => {
    expect(ActionCreator.changeOffer(offer)).toEqual({
      type: ActionType.CHANGE_OFFER,
      payload: {offer},
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct load offers, API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
    .onGet(`/hotels`)
    .reply(200, offers);

    return offersLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_OFFERS,
        payload: {offers},
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
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_OFFER,
        payload: {offer},
      });
    });
  });
});
