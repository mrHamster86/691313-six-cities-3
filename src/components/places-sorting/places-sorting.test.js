import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesSorting} from './places-sorting.jsx';

const currentSort = `Popular`;
const changeSort = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
const booleanFlag = false;
const onToggleFlag = () => {};

it(`PlacesSorting components renders correctly`, () => {
  const tree = renderer.
    create(<PlacesSorting
      currentSort={currentSort}
      changeSort={changeSort}
      booleanFlag={booleanFlag}
      onToggleFlag={onToggleFlag}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
