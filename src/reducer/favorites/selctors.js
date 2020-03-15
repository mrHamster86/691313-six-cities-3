import {createSelector} from 'reselect';
import NameSpace from '../name-space';

export const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;

export const getFavoritesCount = createSelector(
    getFavorites,
    (favorites) => favorites.length);

export const getFavoritesByCity = createSelector(
    getFavorites,
    (favorites) => {
      const obj = {};

      for (let favorite of favorites) {
        obj[favorite.city.name] = obj[favorite.city.name]
          ? [...obj[favorite.city.name], favorite]
          : [favorite];
      }

      return obj;
    });

export const getCitiesList = createSelector(
    getFavoritesByCity,
    (favoritesByCity) => Object.keys(favoritesByCity));
