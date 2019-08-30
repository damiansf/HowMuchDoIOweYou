import React from "react";

export const DisplayUsers = ({ users, emails }) => (
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
              <button />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
