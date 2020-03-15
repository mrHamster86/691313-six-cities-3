import MockAdapter from 'axios-mock-adapter';
import {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
} from './user';
import createAPI from '../../api';


const api = createAPI(() => {});

const user = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

it(`Reducer return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });
});

describe(`Reducer work correctly`, () => {
  it(`Reducer change authorization`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: null,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {authorizationStatus: AuthorizationStatus.AUTH},
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: null,
    });
  });

  it(`Reducer set user data`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: null,
    }, {
      type: ActionType.SET_USER,
      payload: {user},
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    });
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`requireAuthorization work correctly`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it(`setUser work correctly`, () => {
    expect(ActionCreator.setUser(user)).toEqual({
      type: ActionType.SET_USER,
      payload: {user},
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct check status, call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
    .onGet(`/login`)
    .reply(200, user);

    return checkAuth(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: {user},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {authorizationStatus: AuthorizationStatus.AUTH},
      });
    });
  });

  it(`Should make a correct login, API call to /login`, function () {
    const email = `test@test.ru`;
    const password = `123`;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const uploadLogin = Operation.login({email, password});

    apiMock
    .onPost(`/login`, {email, password})
    .reply(200, user);

    return uploadLogin(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_USER,
        payload: {user},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {authorizationStatus: AuthorizationStatus.AUTH},
      });
    });
  });
});
