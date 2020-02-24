import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const placesCount = 10;
const places = [`Beautiful & luxurious`, `Wood and stone place`];

it(`App components renders correctly`, () => {
  const tree = renderer.
    create(<App
      placesCount={placesCount}
      places={places}
      titleClickHandler={() => {}}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
