import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

it(`FavoritesEmpty components renders`, () => {
  const tree = renderer.create(
      <FavoritesEmpty/>).toJSON();
  expect(tree).toMatchSnapshot();
});
