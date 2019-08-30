import React from "react";
import { getIdentifier } from "../../utils";

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
  buildCreditsTable
}) => (
  <div>
    <form>
      <span>slave</span>
      <select onChange={e => handleSlaveEmail(e)}>
        <option>--</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <span>owner</span>
      <select onChange={e => handleOwnerEmail(e)}>
        <option>--</option>
        {emails.map(email => {
          return getIdentifier(email, users[email]);
        })}
      </select>
      <input
        type="button"
        value="Submit"
        onClick={() => {
          let data = null;
          let amount = 0;
          if (ownerEmail.localeCompare(slaveEmail) < 0) {
            if (debtList.includes(ownerEmail + slaveEmail)) {
              data = buildDebtMapTable(debtMap[ownerEmail + slaveEmail], -1);
              amount =
                debtMap[ownerEmail + slaveEmail].debts.reduce(
                  (prev, curr) => prev + curr.amount,
                  0
                ) * -1;
              setTotalDebtMapAmount(amount);
              setDebtMapData(data);
            }
          } else {
            if (debtList.includes(slaveEmail + ownerEmail)) {
              data = buildDebtMapTable(debtMap[slaveEmail + ownerEmail], 1);
              amount = debtMap[slaveEmail + ownerEmail].debts.reduce(
                (prev, curr) => prev + curr.amount,
                0
              );
              setTotalDebtMapAmount(amount);
              setDebtMapData(data);
            }
          }
        }}
      />
    </form>
    <table>
      <thead>
        <tr>
          <th>User One</th>
          <th>User Two</th>
          <th>Amount</th>
          <th>Notes</th>
          <th>Delete Debt</th>
        </tr>
      </thead>
      <tbody>{debtMapData}</tbody>
    </table>
    <span>{debtMapTotal}</span>
    <br />
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
        onClick={() => {
          let data = [];
          let amount = 0;
          let currAmount = 0;
          emails.forEach(email => {
            if (singleSlaveEmail.localeCompare(email) < 0) {
              if (debtList.includes(singleSlaveEmail + email)) {
                currAmount = debtMap[singleSlaveEmail + email].debts.reduce(
                  (prev, curr) => prev + curr.amount,
                  0
                );
                amount += currAmount;
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
                data.push(buildDebtsTable(email, singleSlaveEmail, currAmount));
              }
            }
          });
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
    <table>
      <thead>
        <tr>
          <th>User One</th>
          <th>User Two</th>
          <th>Amount</th>
          <th>Delete Debt</th>
        </tr>
      </thead>
      <tbody>{allDebtsData}</tbody>
    </table>
    <span>{allDebtsTotal}</span>
    <br />
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
        onClick={() => {
          let data = [];
          let amount = 0;
          let currAmount = 0;
          emails.forEach(email => {
            if (singleOwnerEmail.localeCompare(email) < 0) {
              if (debtList.includes(singleOwnerEmail + email)) {
                currAmount =
                  debtMap[singleOwnerEmail + email].debts.reduce(
                    (prev, curr) => prev + curr.amount,
                    0
                  ) * -1;
                amount += currAmount;
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
                data.push(
                  buildCreditsTable(singleOwnerEmail, email, currAmount)
                );
              }
            }
          });
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
    <table>
      <thead>
        <tr>
          <th>User One</th>
          <th>User Two</th>
          <th>Amount</th>
          <th>Delete Debt</th>
        </tr>
      </thead>
      <tbody>{allCreditsData}</tbody>
    </table>
    <span>{allCreditsTotal}</span>
  </div>
);
