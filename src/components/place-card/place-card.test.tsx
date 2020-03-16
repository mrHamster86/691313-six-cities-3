import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils';

const id = 1;
const picture = `img/apartment-01.jpg`;
const price = 120;
const title = `Beautiful & luxurious apartment at great location`;
const type = `apartment`;
const rating = 4;
const isPremium = false;
const isBookmark = false;
const viewMode = `main`;

it(`PlaceCard components renders correctly`, () => {
  const tree = renderer.
    create(
        <Router history={history}>
          <PlaceCard
            id={id}
            picture={picture}
            price={price}
            title={title}
            type={type}
            rating={rating}
            isPremium={isPremium}
            isBookmark={isBookmark}
            viewMode={viewMode}
            onActiveOffer={noop}
            onSetBookmark={noop}
          />
        </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
