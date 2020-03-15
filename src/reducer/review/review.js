import {extend} from '../../utils';
import {ActionCreator as ActionCreatorProperty} from '../property/property';

const initialState = {
  rating: 0,
  review: ``,
};

const ActionType = {
  SET_RATING: `SET_RATING`,
  CHANGE_REVIEW: `CHANGE_REVIEW`,
  CLEAR: `CLEAR`,
};

const ActionCreator = {
  setRating: (rating) => ({
    type: ActionType.SET_RATING,
    payload: {rating},
  }),

  changeReview: (review) => ({
    type: ActionType.CHANGE_REVIEW,
    payload: {review},
  }),

  clear: () => ({
    type: ActionType.CLEAR,
    payload: null,
  })
};

const Operation = {
  uploadReview: ({review, rating, offerId}) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, {
      rating,
      comment: review,
    }).then((response) => {
      dispatch(ActionCreator.clear());
      dispatch(ActionCreatorProperty.changeReviews(response.data));
    });
  },
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_RATING:
      return extend(state, payload);
    case ActionType.CHANGE_REVIEW:
      return extend(state, payload);
    case ActionType.CLEAR:
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
