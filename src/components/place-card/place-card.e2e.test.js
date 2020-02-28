import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const id = 2;
const picture = `img/apartment-02.jpg`;
const price = 100;
const title = `Wood and stone place`;
const type = `room`;
const rating = 4;
const isPremium = true;
const isBookmark = true;

describe(`Mouse events`, () => {
  const handelCardMouseenter = jest.fn((arg) => arg);

  const placeCard = shallow(<PlaceCard
    id={id}
    picture={picture}
    price={price}
    title={title}
    type={type}
    rating={rating}
    isPremium={isPremium}
    isBookmark={isBookmark}
    onMouseenter={handelCardMouseenter}
  />);

  it(`Mouseenter on placeCard should pass to the callback id of place card`, () => {
    const card = placeCard.find(`article`);

    card.simulate(`mouseenter`);
    expect(handelCardMouseenter).toHaveBeenCalledTimes(1);
    expect(handelCardMouseenter.mock.calls[0][0]).toBe(id);
  });
});
