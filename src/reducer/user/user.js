import {extend} from '../../utils';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  requireAuthorization: (authorizationStatus) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {authorizationStatus},
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: {user},
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.setUser(response.data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    });
  },

  login: ({email, password}) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password,
    })
    .then((response) => {
      dispatch(ActionCreator.setUser(response.data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    });
  },
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, payload);
    case ActionType.SET_USER:
      return extend(state, payload);
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
