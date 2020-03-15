import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import {PlaceListMode} from '../../constatnts';
import {Router} from 'react-router-dom';
import history from '../../history';

const offers = [
  {
    'city': {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    'preview_image': `img/apartment-1.jpg`,
    'images': [
      `img/apartment-1.jpg`,
      `img/apartment-1.jpg`,
    ],
    'title': `Canal View Prinsengracht`,
    'is_favorite': false,
    'is_premium': false,
    'rating': 3.1,
    'type': `hotel`,
    'bedrooms': 5,
    'max_adults': 7,
    'price': 350,
    'goods': [
      `Baby seat`,
      `Air conditioning`,
      `Towels`,
      `Washer`,
      `Laptop friendly workspace`,
      `Breakfast`,
    ],
    'host': {
      'id': 1,
      'name': `Angelina`,
      'is_pro': true,
      'avatar_url': `img/avatar-angelina.jpg`,
    },
    'description': `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    'location': {
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16,
    },
    'id': 1,
  }];

const viewMode = PlaceListMode.MAIN;

it(`PlacesList components renders correctly`, () => {
  const tree = renderer.
    create(
        <Router history={history}>
          <PlacesList
            onActiveOffer={() => {}}
            onSetBookmark={() => {}}
            offers={offers}
            viewMode={viewMode}
          />
        </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
