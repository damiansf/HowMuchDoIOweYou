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
  emailOne,
  emailTwo
}) => (
  <div className="containers">
    <h2 className="titles">Add Debt</h2>
    <form>
      <div>
        <select
          className="select-box"
          onChange={e => {
            if (e.target.value !== defaultDebitor) {
              handleOwnerEmail(e);
            }
          }}
        >
          <option>Select the Creditor</option>
          {emails.map(email => {
            return getIdentifier(email, users[email]);
          })}
        </select>
      </div>
      <div>
        <select
          className="select-box select-debitor"
          onChange={e => {
            if (e.target.value !== defaultCreditor) {
              handleSlaveEmail(e);
            }
          }}
        >
          <option>Select the Debitor</option>
          {emails.map(email => {
            return getIdentifier(email, users[email]);
          })}
        </select>
      </div>

      <h3>Amount</h3>
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
      </div>
    </form>
  </div>
);
