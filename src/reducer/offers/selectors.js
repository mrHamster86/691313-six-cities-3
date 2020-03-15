import {createSelector} from 'reselect';
import {SORT_TYPE} from '../../constatnts';
import NameSpace from '../name-space';

const offersSort = (offers = [], sort) => {
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

export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getCity = (state) => state[NameSpace.OFFERS].city;
export const getSort = (state) => state[NameSpace.OFFERS].sort;
export const getActiveOffer = (state) => state[NameSpace.OFFERS].activeOffer;
const offerId = (state, props) => props.offerId;

const groupOffersSelector = createSelector(
    getOffers,
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

export const getCitiesList = createSelector(
    groupOffersSelector,
    ({groupCitiesByName}) => Object.keys(groupCitiesByName).map((name) => groupCitiesByName[name]));

export const getSelectCity = createSelector(
    getCity,
    groupOffersSelector,
    (city, {groupCitiesByName}) => groupCitiesByName[city]);

export const getCityOffers = createSelector(
    getOffers,
    groupOffersSelector,
    getCity,
    getSort,
    (offers, {groupOffersByCity}, city, sort) => {
      return offers.length ? offersSort(groupOffersByCity[city], sort) : [];
    });

export const getOfferById = createSelector(
    getOffers,
    offerId,
    (offers, id) => offers.find((offer) => offer.id === id));


