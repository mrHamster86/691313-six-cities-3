import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const offers = [
  {
    id: 1,
    picture: `img/apartment-01.jpg`,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    rating: 4,
    isPremium: false,
    isBookmark: false
  },
  {
    id: 2,
    picture: `img/apartment-02.jpg`,
    price: 100,
    title: `Wood and stone place`,
    type: `room`,
    rating: 4,
    isPremium: true,
    isBookmark: true,
  },
];

it(`App components renders correctly`, () => {
  const tree = renderer.
    create(<App
      offers={offers}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
