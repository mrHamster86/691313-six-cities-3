import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {PropertyGallery} from './property-gallery';

const images = [`img/apartment-1.jpg`];
const title = `Canal View Prinsengracht`;

it(`PropertyGallery components renders`, () => {
  const tree = renderer.create(
      <PropertyGallery images={images} title={title}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
