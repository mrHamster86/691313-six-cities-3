import {extend} from './utils';
import offers from './mocks/offers';
import {OFFERS_SORT_ITEMS} from './constatnts';

const initialState = {
  city: `Paris`,
  offers,
  sort: OFFERS_SORT_ITEMS[0]
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, action.payload);
    case ActionType.CHANGE_SORT:
      return extend(state, action.payload);
  }

  return state;
};

export default reducer;
