import React from "react";
import { getIdentifier, getIdentifierString } from "../../utils";
import "./index.css";

const defaultDebitor = "Select First User";
const defaultCreditor = "Select Second User";
const defaultSingleDebitor = "Select a Debitor";
const defaultSingleCreditor = "Select a Creditor";

export const DisplayDebts = ({
  handleOwnerEmail,
  handleSlaveEmail,
  setTotalDebtMapAmount,
  setDebtMapData,
  buildDebtMapTable,
  emails,
  users,
  debtMap,
  debtList,
  ownerEmail,
  slaveEmail,
  debtMapData,
  debtMapTotal,
  allDebtsData,
  allDebtsTotal,
  handleSingleSlaveEmail,
  singleSlaveEmail,
  handleSingleOwnerEmail,
  singleOwnerEmail,
  allCreditsTotal,
  allCreditsData,
  noTransactions,
  debtMapTableHead,
  setNoTransactionExisting,
  noTransactionsExisting,
  noDebtsExisiting,
  noDebts,
  noCreditsExisting,
  noCredits,
  debtTableHead,
  creditTableHead,
  buildDebtsData,
  buildCreditsData
}) => (
  <div className="containers">
    <h2 className="titles">View Debts/Credits Between 2 Users</h2>
    <form>
      <select
        onChange={e => {
          handleSlaveEmail(e);
        }}
        className="select-box-data"
      >
        <option>{defaultDebitor}</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <select
        onChange={e => {
          handleOwnerEmail(e);
        }}
        className="select-box-data"
      >
        <option>{defaultCreditor}</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        className="submit-button horizontal-submit"
        onClick={() => {
          let data = null;
          let amount = 0;
          if (defaultCreditor !== ownerEmail && defaultDebitor !== slaveEmail) {
            if (ownerEmail === slaveEmail) {
              alert("Debitor email cannot be the same as the Creditor email");
            } else {
              if (ownerEmail.localeCompare(slaveEmail) < 0) {
                if (debtList.includes(ownerEmail + slaveEmail)) {
                  data = buildDebtMapTable(
                    debtMap[ownerEmail + slaveEmail],
                    -1
                  );
                  amount =
                    debtMap[ownerEmail + slaveEmail].debts.reduce(
                      (prev, curr) => prev + curr.amount,
                      0
                    ) * -1;
                } else {
                  setNoTransactionExisting(true);
                }
              } else {
                if (debtList.includes(slaveEmail + ownerEmail)) {
                  data = buildDebtMapTable(debtMap[slaveEmail + ownerEmail], 1);
                  amount = debtMap[slaveEmail + ownerEmail].debts.reduce(
                    (prev, curr) => prev + curr.amount,
                    0
                  );
                } else {
                  setNoTransactionExisting(true);
                }
              }
              setTotalDebtMapAmount(amount);
              setDebtMapData(data);
            }
          } else {
            alert("Please select a debitor email and a creditor email");
          }
        }}
      />
    </form>
    {noTransactions}
    <table className="tables">
      {debtMapTableHead}
      <tbody>{debtMapData}</tbody>
    </table>
    <h3>
      {noTransactionsExisting
        ? null
        : debtMapData === null
        ? null
        : debtMapTotal >= 0
        ? getIdentifierString(slaveEmail, users[slaveEmail]) +
          " owes " +
          getIdentifierString(ownerEmail, users[ownerEmail]) +
          " " +
          debtMapTotal +
          "$"
        : getIdentifierString(ownerEmail, users[ownerEmail]) +
          " owes " +
          getIdentifierString(slaveEmail, users[slaveEmail]) +
          " " +
          debtMapTotal * -1 +
          "$"}
    </h3>
    <h2 className="titles">View Users Debts</h2>
    <form>
      <select
        className="select-box-data"
        onChange={e => handleSingleSlaveEmail(e)}
      >
        <option>{defaultSingleDebitor}</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        className="submit-button horizontal-submit"
        onClick={() => {
          if (defaultSingleDebitor === singleSlaveEmail) {
            alert("Please Select a Debitor");
          } else {
            buildDebtsData(singleSlaveEmail);
          }
        }}
      />
    </form>
    {noDebts}
    <table className="tables">
      {debtTableHead}
      <tbody>{allDebtsData}</tbody>
    </table>
    <h3>
      {noDebtsExisiting
        ? null
        : allDebtsTotal === 0
        ? null
        : "You are in debt! you owe a total of: " + allDebtsTotal + "$"}
    </h3>
    <h2 className="titles">View Users Credits</h2>
    <form>
      <select
        className="select-box-data"
        onChange={e => handleSingleOwnerEmail(e)}
      >
        <option>{defaultSingleCreditor}</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        className="submit-button horizontal-submit"
        onClick={() => {
          if (singleOwnerEmail === defaultSingleCreditor) {
            alert("Please Select a Creditor");
          } else {
            buildCreditsData(singleOwnerEmail);
          }
        }}
      />
    </form>
    {noCredits}
    <table className="tables">
      {creditTableHead}
      <tbody>{allCreditsData}</tbody>
    </table>
    <h3>
      {noCreditsExisting
        ? null
        : allCreditsTotal === 0
        ? null
        : "People owe you " +
          allCreditsTotal +
          "$, maybe consider charging interest"}
    </h3>
  </div>
);
