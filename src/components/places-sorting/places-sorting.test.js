import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesSorting} from './places-sorting.jsx';

const currentSort = `Popular`;
const changeSort = () => {};
const booleanState = false;
const onToggle = () => {};

it(`PlacesSorting components renders correctly`, () => {
  const tree = renderer.
    create(<PlacesSorting
      currentSort={currentSort}
      changeSort={changeSort}
      booleanState={booleanState}
      onToggle={onToggle}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
