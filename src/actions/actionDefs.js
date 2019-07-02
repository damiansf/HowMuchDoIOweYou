import * as actionConst from './action-constants';

export function addUser(data) {
  return {
    type: actionConst.addUser,
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    },
    email: data.email
  }
}
