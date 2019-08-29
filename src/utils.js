import React from "react";

export function checkForDebtInstance(debtArray, idOne, idTwo) {
  return debtArray.includes(idOne + idTwo);
}

export function getIdentifier(email, user) {
  return (
    <option key={email} value={email}>
      {user.firstName +
        " " +
        user.lastName +
        " (" +
        email +
        ")"}
    </option>
  );
}
