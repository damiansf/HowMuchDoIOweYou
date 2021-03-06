import * as actionConst from "./action-constants";
import { orderEmails } from "../utils";

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
    type: actionConst.clearData
  };
}

export function deleteDebt(data) {
  let { userOne, userTwo } = orderEmails(data.ownerEmail, data.slaveEmail);

  return {
    type: actionConst.deleteDebt,
    payload: { userIDOne: userOne, userIDTwo: userTwo, index: data.index }
  };
}

export function deleteUser(data) {
  return {
    type: actionConst.deleteUser,
    payload: {
      email: data.email
    }
  };
}

export function deleteDebtMap(data) {
  let { userOne, userTwo } = orderEmails(data.ownerEmail, data.slaveEmail);

  return {
    type: actionConst.deleteDebtMap,
    payload: { userIDOne: userOne, userIDTwo: userTwo }
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
      notes: data.notes,
      timeStamp: Date.now()
    }
  };
}

export function addDebtInstance(data) {
  return {
    type: actionConst.addDebtInstance,
    payload: {
      key: data.key,
      debts: data.debts
    }
  };
}
