import * as React from 'react';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

configure({adapter: new Adapter()});

const id = 1;
const picture = `img/apartment-01.jpg`;
const price = 120;
const title = `Beautiful & luxurious apartment at great location`;
const type = `apartment`;
const rating = 4;
const isPremium = false;
const isBookmark = false;
const viewMode = `main`;

describe(`Mouse events`, () => {
  const handleCardMouseenter = jest.fn((arg) => arg);
  const handleBookmarkClick = jest.fn((arg) => arg);

  const placeCard = shallow(<PlaceCard
    id={id}
    picture={picture}
    price={price}
    title={title}
    type={type}
    rating={rating}
    isPremium={isPremium}
    isBookmark={isBookmark}
    viewMode={viewMode}
    onActiveOffer={handleCardMouseenter}
    onSetBookmark={handleBookmarkClick}
  />);

  it(`Mouseenter on placeCard should pass to the callback id of place card`, () => {
    const card = placeCard.find(`article`);

    card.simulate(`mouseenter`);
    expect(handleCardMouseenter).toHaveBeenCalledTimes(1);
    expect(handleCardMouseenter.mock.calls[0][0]).toBe(id);
  });
});
