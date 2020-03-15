import {extend, updateObjectInArray} from '../../utils';
import {OFFERS_SORT_ITEMS} from '../../constatnts';

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
  CHANGE_OFFERS: `CHANGE_OFFERS`,
  CHANGE_OFFER: `CHANGE_OFFER`,
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

  changeOffers: (offers) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: {offers},
  }),

  changeOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: {offer},
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      dispatch(ActionCreator.changeOffers(response.data));
    });
  },

  setFavorites: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`).then((response) => {
      dispatch(ActionCreator.changeOffer(response.data));
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
    case ActionType.CHANGE_OFFERS:
      return extend(state, payload);
    case ActionType.CHANGE_OFFER:
      return extend(state, {offers: updateObjectInArray(state.offers, payload.offer, `id`)});
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer,
  Operation
};
