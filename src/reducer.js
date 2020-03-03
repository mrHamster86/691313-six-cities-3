import {extend} from './utils';
import offers from './mocks/offers';

const initialState = {
  city: `Paris`,
  offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, action.payload);
  }

  return state;
};

export default reducer;
