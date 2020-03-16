import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MainEmpty} from './main-empty';

const cityName = `Paris`;

it(`MainEmpty components renders`, () => {
  const tree = renderer.create(
      <MainEmpty cityName={cityName}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
