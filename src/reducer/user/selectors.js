import NameSpace from '../name-space';

export const getStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].user;
