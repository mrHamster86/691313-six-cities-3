import {extend} from './utils';
import {OFFERS_SORT_ITEMS} from './constatnts';

const initialState = {
  city: `Amsterdam`,
  offers: [],
  sort: OFFERS_SORT_ITEMS[0],
  activeOffer: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: {city}
  }),

  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: {sort},
  }),

  changeActiveOffer: (activeOffer = -1) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: {activeOffer},
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: {offers},
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      dispatch(ActionCreator.loadOffers(response.data));
    });
  },
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_CITY:
      return extend(state, payload);
    case ActionType.CHANGE_SORT:
      return extend(state, payload);
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, payload);
    case ActionType.LOAD_OFFERS:
      return extend(state, payload);
  }

  return state;
};

export {ActionType, ActionCreator, reducer, Operation};
