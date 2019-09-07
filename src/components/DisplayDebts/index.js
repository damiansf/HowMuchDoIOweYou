import React from "react";
import { getIdentifier, getIdentifierString } from "../../utils";
import "./index.css";

const defaultDebitor = "Select First User";
const defaultCreditor = "Select Second User";

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
  buildDebtsTable,
  setDebtsData,
  setTotalDebtsAmount,
  handleSingleOwnerEmail,
  setCreditsData,
  singleOwnerEmail,
  allCreditsTotal,
  allCreditsData,
  setTotalCreditsAmount,
  buildCreditsTable,
  setNumDebts,
  setNumCredits,
  noTransactions,
  debtMapTableHead,
  setTransactionExisting,
  noTransactionsExisting
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
                  setTransactionExisting(true);
                }
              } else {
                if (debtList.includes(slaveEmail + ownerEmail)) {
                  data = buildDebtMapTable(debtMap[slaveEmail + ownerEmail], 1);
                  amount = debtMap[slaveEmail + ownerEmail].debts.reduce(
                    (prev, curr) => prev + curr.amount,
                    0
                  );
                } else {
                  setTransactionExisting(true);
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
      <span>slave</span>
      <select onChange={e => handleSingleSlaveEmail(e)}>
        <option>--</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        className="submit-button"
        onClick={() => {
          let data = [];
          let amount = 0;
          let currAmount = 0;
          let countDebts = 0;
          emails.forEach(email => {
            if (singleSlaveEmail.localeCompare(email) < 0) {
              if (debtList.includes(singleSlaveEmail + email)) {
                currAmount = debtMap[singleSlaveEmail + email].debts.reduce(
                  (prev, curr) => prev + curr.amount,
                  0
                );
                amount += currAmount;
                countDebts++;
                data.push(buildDebtsTable(email, singleSlaveEmail, currAmount));
              }
            } else {
              if (debtList.includes(email + singleSlaveEmail)) {
                currAmount =
                  debtMap[email + singleSlaveEmail].debts.reduce(
                    (prev, curr) => prev + curr.amount,
                    0
                  ) * -1;
                amount += currAmount;
                countDebts++;
                data.push(buildDebtsTable(email, singleSlaveEmail, currAmount));
              }
            }
          });
          setNumDebts(countDebts);
          if (amount > 0) {
            setTotalDebtsAmount(amount);
            setDebtsData(data);
          } else {
            setTotalDebtsAmount(0);
            setDebtsData([]);
          }
        }}
      />
    </form>
    <table className="tables">
      <thead>
        <tr>
          <th>User One</th>
          <th>User Two</th>
          <th>Total Amount</th>
          <th>Delete Debts</th>
        </tr>
      </thead>
      <tbody>{allDebtsData}</tbody>
    </table>
    <span>{allDebtsTotal}</span>
    <h2 className="titles">View Users Credits</h2>
    <form>
      <span>owner</span>
      <select onChange={e => handleSingleOwnerEmail(e)}>
        <option>--</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        className="submit-button"
        onClick={() => {
          let data = [];
          let amount = 0;
          let currAmount = 0;
          let countCredits = 0;
          emails.forEach(email => {
            if (singleOwnerEmail.localeCompare(email) < 0) {
              if (debtList.includes(singleOwnerEmail + email)) {
                currAmount =
                  debtMap[singleOwnerEmail + email].debts.reduce(
                    (prev, curr) => prev + curr.amount,
                    0
                  ) * -1;
                amount += currAmount;
                countCredits++;
                data.push(
                  buildCreditsTable(singleOwnerEmail, email, currAmount)
                );
              }
            } else {
              if (debtList.includes(email + singleOwnerEmail)) {
                currAmount = debtMap[email + singleOwnerEmail].debts.reduce(
                  (prev, curr) => prev + curr.amount,
                  0
                );
                amount += currAmount;
                countCredits++;
                data.push(
                  buildCreditsTable(singleOwnerEmail, email, currAmount)
                );
              }
            }
          });
          setNumCredits(countCredits);
          if (amount > 0) {
            setTotalCreditsAmount(amount);
            setCreditsData(data);
          } else {
            setTotalCreditsAmount(0);
            setCreditsData([]);
          }
        }}
      />
    </form>
    <table className="tables">
      <thead>
        <tr>
          <th>User One</th>
          <th>User Two</th>
          <th>Total Amount</th>
          <th>Delete Debt</th>
        </tr>
      </thead>
      <tbody>{allCreditsData}</tbody>
    </table>
    <span>{allCreditsTotal}</span>
  </div>
);
