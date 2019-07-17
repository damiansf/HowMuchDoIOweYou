export function checkForDebtInstance(debtArray, idOne, idTwo) {
  return debtArray.includes(idOne + idTwo);
}
