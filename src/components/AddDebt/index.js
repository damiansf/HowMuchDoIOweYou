import React from "react";
import { getIdentifier } from "../../utils";

export const AddDebt = ({
  emails,
  users,
  addDebt,
  handleOwnerEmail,
  handleSlaveEmail,
  handleNotes,
  handleAmount,
  amount,
  notes,
  emailOne,
  emailTwo
}) => (
  <form>
    <span>owner</span>
    <select onChange={e => handleOwnerEmail(e)}>
      {emails.map(email => {
        return getIdentifier(email, users[email]);
      })}
    </select>
    <span>slave</span>
    <select onChange={e => handleSlaveEmail(e)}>
      {emails.map(email => {
        return getIdentifier(email, users[email]);
      })}
    </select>
    <label>
      Amount:
      <input
        type="text"
        name="amount"
        value={amount}
        onChange={e => handleAmount(e)}
      />
    </label>
    <label>
      Notes:
      <input
        type="text"
        name="notes"
        value={notes}
        onChange={e => handleNotes(e)}
      />
    </label>
    <input
      type="button"
      value="Submit"
      onClick={() => {
        if (!emailTwo) {
          alert("Second email either null or the same");
        } else {
          addDebt({
            userOne: emailOne ? emailOne : emails[0],
            userTwo: emailTwo,
            amount: amount,
            notes: notes
          });
          alert("User Debt added");
        }
      }}
    />
  </form>
);
