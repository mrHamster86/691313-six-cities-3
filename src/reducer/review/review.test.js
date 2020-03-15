import MockAdapter from 'axios-mock-adapter';
import {ActionCreator, ActionType, Operation, reducer} from './review';
import createAPI from '../../api';
import {ActionType as ActionTypeProperty} from '../property/property';

const api = createAPI(() => {});

const comment = {
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
};

it(`Reducer return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    rating: 0,
    review: ``,
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer update rating`, () => {
    expect(reducer({
      rating: 0,
      review: ``,
    }, {
      type: ActionType.SET_RATING,
      payload: {rating: 5},
    })).toEqual({
      rating: 5,
      review: ``,
    });
  });

  it(`Reducer change review`, () => {
    expect(reducer({
      rating: 0,
      review: ``,
    }, {
      type: ActionType.CHANGE_REVIEW,
      payload: {review: `test`},
    })).toEqual({
      rating: 0,
      review: `test`,
    });
  });

  it(`Reducer clear`, () => {
    expect(reducer({
      rating: 5,
      review: `test`,
    }, {
      type: ActionType.CLEAR,
      payload: null,
    })).toEqual({
      rating: 0,
      review: ``,
    });
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`setRating work correctly`, () => {
    const rating = 5;
    expect(ActionCreator.setRating(rating)).toEqual({
      type: ActionType.SET_RATING,
      payload: {rating},
    });
  });

  it(`changeReview work correctly`, () => {
    const review = `test`;
    expect(ActionCreator.changeReview(review)).toEqual({
      type: ActionType.CHANGE_REVIEW,
      payload: {review},
    });
  });

  it(`clear work correctly`, () => {
    expect(ActionCreator.clear()).toEqual({
      type: ActionType.CLEAR,
      payload: null,
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct upload, API call to /comments/:hotel_id`, function () {
    const review = `test`;
    const rating = 5;
    const offerId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const uploaderReview = Operation.uploadReview({review, rating, offerId});

    apiMock
    .onPost(`/comments/1`, {comment: review, rating})
    .reply(200, comment);

    return uploaderReview(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CLEAR,
        payload: null,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionTypeProperty.CHANGE_REVIEWS,
        payload: {reviews: comment}
      });
    });
  });
});
