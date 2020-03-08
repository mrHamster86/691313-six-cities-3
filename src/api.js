import axios from 'axios';

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
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED || Error.BAD_REQUEST) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
