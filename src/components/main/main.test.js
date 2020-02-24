import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const placesCount = 10;
const places = [`Beautiful & luxurious`, `Wood and stone place`];

it(`Main components renders correctly`, () => {
  const tree = renderer.
    create(<Main
      placesCount={placesCount}
      places={places}
      titleClickHandler={() => {}}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
