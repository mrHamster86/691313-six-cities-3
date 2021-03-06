import axios from 'axios';
import history from './history';
import AppRoute from './AppRoute';

const LOGIN_LINK = `https://htmlacademy-react-3.appspot.com/six-cities/login`;

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response, request} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      if (request.responseURL !== LOGIN_LINK) {
        history.push(AppRoute.LOGIN);
      }

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
