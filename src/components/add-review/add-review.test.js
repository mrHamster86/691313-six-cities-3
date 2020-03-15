import React from 'react';
import renderer from 'react-test-renderer';
import {AddReview} from './add-review';

const booleanState = true;
const onToggle = () => {};
const offerId = 1;
const rating = 1;
const review = `comment`;
const isValidForm = false;
const setRating = () => {};
const changeReview = () => {};
const clearReview = () => {};
const uploadReview = () => {};

it(`AddReview components renders`, () => {
  const tree = renderer.create(
      <AddReview
        booleanState={booleanState}
        onToggle={onToggle}
        offerId={offerId}
        rating={rating}
        review={review}
        isValidForm={isValidForm}
        setRating={setRating}
        changeReview={changeReview}
        clearReview={clearReview}
        uploadReview={uploadReview}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
