import React from "react";

export const DisplayUsers = ({
  users,
  emails,
  debtList,
  deleteUser,
  deleteDebtMap,
  checkForDebtInstance
}) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {emails.map(email => {
        return (
          <tr key={users[email].email}>
            <td>{users[email].firstName}</td>
            <td>{users[email].lastName}</td>
            <td>{users[email].email}</td>
            <td>
              <button
                onClick={() => {
                  let userOne,
                    userTwo = null;
                  emails.forEach(emailTwo => {
                    if (email.localeCompare() < 0) {
                      userOne = email;
                      userTwo = emailTwo;
                    } else {
                      userOne = emailTwo;
                      userTwo = email;
                    }
                  });
                  if (checkForDebtInstance(debtList, userOne, userTwo)) {
                    deleteDebtMap({ ownerEmail: userOne, slaveEmail: userTwo });
                  }
                  deleteUser({ email: email });
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
