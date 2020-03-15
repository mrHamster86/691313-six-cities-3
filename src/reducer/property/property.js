import {extend, updateObjectInArray} from '../../utils';
import {ActionCreator as ActionCreatorOffers} from '../offers/offers';

const initialState = {
  reviews: [],
  nearOffers: [],
};

const ActionType = {
  CHANGE_REVIEWS: `CHANGE_REVIEWS`,
  CHANGE_NEAR_OFFERS: `CHANGE_NEAR_OFFERS`,
  CHANGE_NEAR_OFFER: `CHANGE_NEAR_OFFER`,
  RESET: `RESET`
};

const ActionCreator = {
  changeReviews: (reviews) => ({
    type: ActionType.CHANGE_REVIEWS,
    payload: {reviews}
  }),

  changeNearOffers: (nearOffers) => ({
    type: ActionType.CHANGE_REVIEWS,
    payload: {nearOffers}
  }),

  changeNearOffer: (offer) => ({
    type: ActionType.CHANGE_NEAR_OFFER,
    payload: {offer},
  }),

  reset: () => ({
    type: ActionType.RESET,
    payload: null,
  }),
};

const Operation = {
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`).then((response) => {
      dispatch(ActionCreator.changeReviews(response.data));
    });
  },

  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`hotels/${id}/nearby`).then((response) => {
      dispatch(ActionCreator.changeNearOffers(response.data));
    });
  },

  setFavorites: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`).then((response) => {
      dispatch(ActionCreatorOffers.changeOffer(response.data));
      dispatch(ActionCreator.changeNearOffer(response.data));
    });
  },
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_REVIEWS:
      return extend(state, payload);
    case ActionType.CHANGE_NEAR_OFFERS:
      return extend(state, payload);
    case ActionType.CHANGE_NEAR_OFFER:
      return extend(state, {
        nearOffers: updateObjectInArray(state.nearOffers, payload.offer, `id`)
      });
    case ActionType.RESET:
      return extend(state, initialState);
  }

  return state;
};

export {
  ActionType,
  ActionCreator,
  reducer,
  Operation
};
