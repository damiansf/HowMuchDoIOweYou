import React from "react";
import { getIdentifier } from "../../utils";
import "./index.css";

const defaultDebitor = "Select the Debitor";
const defaultCreditor = "Select the Creditor";

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
  ownerEmail,
  slaveEmail,
  debtChangeCounter
}) => (
  <div className="containers">
    <h2 className="titles">Add Debt</h2>
    <form>
      <div>
        <select
          className="select-box"
          onChange={e => {
            handleOwnerEmail(e);
          }}
        >
          <option>{defaultCreditor}</option>
          {emails.map(email => {
            return getIdentifier(email, users[email]);
          })}
        </select>
      </div>
      <div>
        <select
          className="select-box select-debitor"
          onChange={e => {
            handleSlaveEmail(e);
          }}
        >
          <option>{defaultDebitor}</option>
          {emails.map(email => {
            return getIdentifier(email, users[email]);
          })}
        </select>
      </div>

      <h3>Amount ($)</h3>
      <input
        type="text"
        name="amount"
        value={amount}
        className="input-boxes"
        onChange={e => handleAmount(e)}
      />

      <h3>Notes</h3>
      <input
        type="text"
        name="notes"
        value={notes}
        className="input-boxes"
        onChange={e => handleNotes(e)}
      />
      <div>
        <input
          type="button"
          value="Submit"
          className="submit-button"
          onClick={() => {
            if (
              ownerEmail !== defaultCreditor &&
              slaveEmail !== defaultDebitor
            ) {
              if (slaveEmail === ownerEmail) {
                alert("Debitor cannot be the same as the Creditor");
              } else {
                addDebt({
                  userOne: ownerEmail,
                  userTwo: slaveEmail,
                  amount: amount,
                  notes: notes
                });
                debtChangeCounter();
                alert("Debt record added");
              }
            } else {
              alert("Please select a debitor and a creditor");
            }
          }}
        />
      </div>
    </form>
  </div>
);
