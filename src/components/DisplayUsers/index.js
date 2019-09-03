import React from "react";
import Modal from "react-modal";

export const DisplayUsers = ({
  users,
  emails,
  debtList,
  deleteUser,
  deleteDebtMap,
  checkForDebtInstance,
  editUser,
  orderEmails,
  modalIsOpen,
  editEmail,
  firstName,
  lastName,
  email,
  saveEdit,
  cancelEdit,
  handleLastName,
  handleFirstName,
  handleEmail,
  addUser,
  oldEmail
}) => (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={cancelEdit}
      contentLabel="Edit User"
    >
      <span>
        {editEmail
          ? ""
          : "Note, only the first and last name can be changed for this user as they are involved in debts"}
      </span>
      <form>
        <label>
          FirstName:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => handleFirstName(e)}
          />
        </label>
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={e => handleLastName(e)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => handleEmail(e)}
            disabled={editEmail ? "" : "disabled"}
          />
        </label>
        <input
          type="button"
          value="Save"
          onClick={() => {
            if (editEmail) {
              if (!emails.includes(email)) {
                deleteUser({ email: oldEmail });
                addUser({
                  firstName: firstName,
                  lastName: lastName,
                  email: email
                });
                saveEdit();
              } else {
                alert("User with same email already exists");
              }
            } else {
              deleteUser({ email: email });
              addUser({
                firstName: firstName,
                lastName: lastName,
                email: email
              });
              saveEdit();
            }
          }}
        />
        <input
          type="button"
          value="Cancel"
          onClick={() => {
            cancelEdit();
          }}
        />
      </form>
    </Modal>
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
  </div>
);
