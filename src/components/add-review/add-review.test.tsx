import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {AddReview} from './add-review';
import {noop} from "../../utils";

const booleanState = true;
const offerId = 1;
const rating = 1;
const review = `comment`;
const isValidForm = false;

it(`AddReview components renders`, () => {
  const tree = renderer.create(
      <AddReview
        booleanState={booleanState}
        onToggle={noop}
        offerId={offerId}
        rating={rating}
        review={review}
        isValidForm={isValidForm}
        onChangeRating={noop}
        changeReview={noop}
        clearReview={noop}
        uploadReview={noop}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
