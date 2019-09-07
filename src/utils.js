import React from "react";

export function checkForDebtInstance(debtArray, idOne, idTwo) {
  return debtArray.includes(idOne + idTwo);
}

export function orderEmails(firstEmail, secondEmail) {
  let userOne = null;
  let userTwo = null;

  if (firstEmail.localeCompare(secondEmail) < 0) {
    userOne = firstEmail;
    userTwo = secondEmail;
  } else {
    userOne = secondEmail;
    userTwo = firstEmail;
  }

  return {
    userOne,
    userTwo
  };
}

export function getIdentifier(email, user) {
  return (
    <option key={email} value={email}>
      {user.firstName + " " + user.lastName + " (" + email + ")"}
    </option>
  );
}

export function getIdentifierString(email, user) {
  return user.firstName + " " + user.lastName + " (" + email + ")";
}
