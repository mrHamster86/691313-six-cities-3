import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

const placesCount = 10;
const places = [`Beautiful & luxurious`, `Wood and stone place`];
const titleClickHandler = jest.fn();

it(`Title simulates click`, () => {
  const main = shallow(
      <Main
        placesCount={placesCount}
        places={places}
        titleClickHandler={titleClickHandler}
      />
  );

  const titleLink = main.find(`.place-card__name > a`);

  titleLink.at(1).simulate(`click`);
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
