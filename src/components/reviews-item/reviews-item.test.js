import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';

const user = `Max`;
const avatar = `img/avatar.jpg`;
const rating = 4;
const date = `April 2020`;
const text = `Comment`;

it(`ReviewsItem components renders`, () => {
  const tree = renderer.create(
      <ReviewsItem
        user={user}
        avatar={avatar}
        rating={rating}
        date={date}
        text={text}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
