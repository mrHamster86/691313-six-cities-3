import {combineReducers} from 'redux';
import NameSpace from './name-space';
import {reducer as offers} from './offers/reducer';
import {reducer as user} from './user/reducer';

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
});
