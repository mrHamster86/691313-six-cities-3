import renderer from 'react-test-renderer';
import React from 'react';
import {CitiesList} from './cities-list';

const currentCity = `Paris`;
const cities = [`Paris`, `Amsterdam`];
const changeCity = () => {};

it(`CitiesList components renders correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        currentCity={currentCity}
        cities={cities}
        changeCity={changeCity}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
