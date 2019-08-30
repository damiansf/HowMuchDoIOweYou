import * as actionConst from "./action-constants";

export function addUser(data) {
  return {
    type: actionConst.addUser,
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    },
    email: data.email
  };
}

export function clearData() {
  return {
    type: actionConst.clearData,
  };
}

export function addDebt(data) {
  let userOne = "";
  let userTwo = "";
  let multiplier = 1;

  if (data.userOne.localeCompare(data.userTwo) < 0) {
    userOne = data.userOne;    
    userTwo = data.userTwo;
    multiplier = -1;
  } else {
    userOne = data.userTwo;    
    userTwo = data.userOne;        
  }

  return {
    type: actionConst.addDebt,
    payload: {
      userIDOne: userOne,
      userIDTwo: userTwo,
      amount: data.amount * multiplier,
      notes: data.notes
    }
  };
}
