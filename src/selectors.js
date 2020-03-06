import {createSelector} from 'reselect';
import {SORT_TYPE} from './constatnts';

const offersSort = (offers, sort) => {
  switch (sort) {
    case SORT_TYPE.PLH:
      return [...offers].sort((a, b) => a.price - b.price);
    case SORT_TYPE.PHL:
      return [...offers].sort((a, b) => b.price - a.price);
    case SORT_TYPE.RATING:
      return [...offers].sort((a, b) => b.rating - a.rating);
  }
  return [...offers];
};

const offersSelector = (state) => state.offers;
const citySelector = (state) => state.city;
const sortSelector = (state) => state.sort;

const groupOffersSelector = createSelector(
    offersSelector,
    (offers) => {
      const groupCitiesByName = {};
      const groupOffersByCity = {};

      for (let offer of offers) {
        groupCitiesByName[offer.city.name] = offer.city;
        groupOffersByCity[offer.city.name] = groupOffersByCity[offer.city.name]
          ? [...groupOffersByCity[offer.city.name], offer]
          : [offer];
      }

      return {groupCitiesByName, groupOffersByCity};
    });

export const cityOffers = createSelector(
    groupOffersSelector,
    citySelector,
    sortSelector,
    ({groupOffersByCity}, city, sort) => offersSort(groupOffersByCity[city.name], sort));

export const citiesList = createSelector(
    groupOffersSelector,
    ({groupCitiesByName}) => Object.keys(groupCitiesByName).map((name) => groupCitiesByName[name]));
