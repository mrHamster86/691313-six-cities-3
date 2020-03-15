import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list';
import {AuthorizationStatus} from '../../reducer/user/user';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';

const propertyId = 1;
const reviews = [
  {
    'comment': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    'date': `2019-05-08T14:13:56.569Z`,
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': `img/1.png`,
      'id': 4,
      'is_pro': false,
      'name': `Max`,
    },
  }];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.REVIEW]: {
    rating: 0,
    review: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  },
});

describe(`ReviewsList components renders`, () => {
  it(`User authorize`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <ReviewsList
            userStatus={AuthorizationStatus.AUTH}
            propertyId={propertyId}
            reviews={reviews}
          />
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`User unauthorized`, () => {
    const tree = renderer.create(
        <ReviewsList
          userStatus={AuthorizationStatus.NO_AUTH}
          propertyId={propertyId}
          reviews={reviews}
        />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
