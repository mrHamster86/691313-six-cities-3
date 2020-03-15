import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import moment from 'moment';

export const getReviews = (state) => state[NameSpace.PROPERTY].reviews;
export const getNearOffers = (state) => state[NameSpace.PROPERTY].nearOffers;

export const getCurrentCity = createSelector(
    getNearOffers,
    (offers) => offers.length ? offers[0].city : null);

export const getSortReview = createSelector(
    getReviews,
    (reviews) => reviews.sort((a, b) => {
      return moment(b.date).unix() - moment(a.date).unix();
    }));
