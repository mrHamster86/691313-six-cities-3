import {extend, updateObjectInArray} from '../../utils';
import {ActionCreator as ActionCreatorOffers} from '../offers/offers';

const initialState = {
  favorites: [],
};

const ActionType = {
  SET_FAVORITES: `SET_FAVORITES`,
  CHANGE_FAVORITES_OFFER: `CHANGE_FAVORITES_OFFER`,
  RESET: `RESET`,
};

const ActionCreator = {
  setFavorites: (favorites) => ({
    type: ActionType.SET_FAVORITES,
    payload: {favorites},
  }),

  changeFavorite: (offer) => ({
    type: ActionType.CHANGE_FAVORITES_OFFER,
    payload: {offer},
  }),

  reset: () => ({
    type: ActionType.RESET,
    payload: null,
  }),
};

const Operation = {
  load: () => (dispatch, getState, api) => {
    return api.get(`/favorite`).then((response) => {
      dispatch(ActionCreator.setFavorites(response.data));
    });
  },

  setFavorites: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`).then((response) => {
      dispatch(ActionCreatorOffers.changeOffer(response.data));
      dispatch(ActionCreator.changeFavorite(response.data));
    });
  },
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_FAVORITES:
      return extend(state, payload);
    case ActionType.CHANGE_FAVORITES_OFFER:
      return extend(state, {
        favorites: updateObjectInArray(state.favorites, payload.offer, `id`)
      });
    case ActionType.RESET:
      return extend(state, initialState);
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
