import {extend} from './utils';
import offers from './mocks/offers';
import {OFFERS_SORT_ITEMS} from './constatnts';

const initialState = {
  city: offers[0].city,
  offers,
  sort: OFFERS_SORT_ITEMS[0],
  activeOffer: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, action.payload);
    case ActionType.CHANGE_SORT:
      return extend(state, action.payload);
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, action.payload);
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
