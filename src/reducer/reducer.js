import {combineReducers} from 'redux';
import NameSpace from './name-space';
import {reducer as offers} from './offers/offers';
import {reducer as user} from './user/user';
import {reducer as favorites} from './favorites/favorites';
import {reducer as property} from './property/property';
import {reducer as review} from './review/review';

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.PROPERTY]: property,
  [NameSpace.REVIEW]: review,
});
