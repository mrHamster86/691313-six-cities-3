import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {PlacesSorting} from './places-sorting';
import {noop} from '../../utils';

const currentSort = `Popular`;
const booleanState = false;

it(`PlacesSorting components renders correctly`, () => {
  const tree = renderer.
    create(<PlacesSorting
      currentSort={currentSort}
      onChangeSort={noop}
      booleanState={booleanState}
      onToggle={noop}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
