import React from "react";
import { getIdentifier } from "../../utils";

export const DisplayDebts = ({
  handleOwnerEmail,
  handleSlaveEmail,
  setTotalAmount,
  setData,
  buildDebtMapTable,
  emails,
  users,
  debtMap,
  debtList,
  emailOne,
  emailTwo,
  displayData,
  totalAmount
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
          if (emailOne.localeCompare(emailTwo) < 0) {
            if (debtList.includes(emailOne + emailTwo)) {
              data = buildDebtMapTable(debtMap[emailOne + emailTwo], -1);
              amount =
                debtMap[emailOne + emailTwo].debts.reduce(
                  (prev, curr) => prev + curr.amount,
                  0
                ) * -1;
              setTotalAmount(amount);
              setData(data);
            }
          } else {
            if (debtList.includes(emailTwo + emailOne)) {
              data = buildDebtMapTable(debtMap[emailTwo + emailOne], 1);
              amount = debtMap[emailTwo + emailOne].debts.reduce(
                (prev, curr) => prev + curr.amount,
                0
              );
              setTotalAmount(amount);
              setData(data);
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
      <tbody>{displayData}</tbody>
    </table>
    <span>{totalAmount}</span>
  </div>
);
