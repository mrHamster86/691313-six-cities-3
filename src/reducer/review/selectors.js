import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const MAX_REVIEW_LENGTH = 300;
const MIN_REVIEW_LENGTH = 50;

export const getRating = (state) => state[NameSpace.REVIEW].rating;
export const getReview = (state) => state[NameSpace.REVIEW].review;

const validationRating = createSelector(
    getRating,
    (rating) => rating > 0);

const validationReview = createSelector(
    getReview,
    (review) => MIN_REVIEW_LENGTH <= review.length && review.length <= MAX_REVIEW_LENGTH);

export const formValidation = createSelector(
    validationRating,
    validationReview,
    (isValidRating, isValidReview) => isValidRating && isValidReview);
