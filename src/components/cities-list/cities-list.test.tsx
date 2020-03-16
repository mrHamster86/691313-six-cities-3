import * as renderer from 'react-test-renderer';
import * as React from 'react';
import {CitiesList} from './cities-list';
import {noop} from "../../utils";

const currentCity = `Paris`;
const cities = [{
  name: `Paris`,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
}];

it(`CitiesList components renders correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        cities={cities}
        onChangeCity={noop}
        selectCity={currentCity}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
