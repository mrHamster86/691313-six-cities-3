import renderer from 'react-test-renderer';
import React from 'react';
import {CitiesList} from './cities-list';

const currentCity = `Paris`;
const cities = [{
  name: `Paris`,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
}];
const changeCity = () => {};

it(`CitiesList components renders correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        cities={cities}
        changeCity={changeCity}
        selectCity={currentCity}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
