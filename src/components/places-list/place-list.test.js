import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const offers = [
  {
    id: 1,
    picture: `img/apartment-01.jpg`,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    rating: 4,
    isPremium: true,
    isBookmark: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    location: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        user: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        date: `December 24, 2018`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    ],
    city: `Amsterdam`,
  }
];

const viewMode = `main`;

it(`PlacesList components renders correctly`, () => {
  const tree = renderer.
    create(<PlacesList
      offers={offers}
      viewMode={viewMode}
    />).
    toJSON();
  expect(tree).toMatchSnapshot();
});
