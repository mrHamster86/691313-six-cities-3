import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyInfo} from './property-info';

const rating = 1;
const type = `hotel`;
const bedrooms = 1;
const maxAdults = 1;
const price = 100;
const goods = [
  `Baby seat`,
  `Air conditioning`,
  `Towels`,
  `Washer`,
  `Laptop friendly workspace`,
  `Breakfast`,
];
const isPro = true;
const avatar = `img/avatar-angelina.jpg`;
const name = `Angelina`;
const description = `This is a place for dreamers to reset, reflect, and create.`;

it(`PropertyInfo components renders`, () => {
  const tree = renderer.create(
      <PropertyInfo
        rating={rating}
        type={type}
        bedrooms={bedrooms}
        maxAdults={maxAdults}
        price={price}
        goods={goods}
        isPro={isPro}
        avatar={avatar}
        name={name}
        description={description}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
