import React from "react";

export const DisplayUsers = ({
  users,
  emails,
  debtList,
  deleteUser,
  deleteDebtMap,
  checkForDebtInstance,
  editUser,
  orderEmails
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
                  emails.forEach(emailTwo => {
                    let { userOne, userTwo } = orderEmails(email, emailTwo);
                    if (checkForDebtInstance(debtList, userOne, userTwo)) {
                      deleteDebtMap({
                        ownerEmail: userOne,
                        slaveEmail: userTwo
                      });
                    }
                  });

                  deleteUser({ email: email });
                }}
              />
              <button
                onClick={() => {
                  let editEmail = false;
                  emails.forEach(emailTwo => {
                    let { userOne, userTwo } = orderEmails(email, emailTwo);
                    if (!checkForDebtInstance(debtList, userOne, userTwo)) {
                      editEmail = true;
                    } else {
                      editEmail = false;
                    }
                  });
                  console.log(editEmail);
                  editUser(email, editEmail);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
