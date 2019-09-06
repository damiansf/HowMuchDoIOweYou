import React from "react";
import Modal from "react-modal";
import "./index.css";

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
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cancelEdit}
        contentLabel="Edit User"
        className="modal-style"
      >
        <form>
          <div>
            <div>
              <h3>FirstName</h3>
            </div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              autoComplete="new-password"
              className="input-boxes"
              onChange={e => handleFirstName(e)}
            />
            <div>
              <h3>LastName</h3>
            </div>
            <input
              type="text"
              name="lastName"
              value={lastName}
              autoComplete="new-password"
              className="input-boxes"
              onChange={e => handleLastName(e)}
            />
          </div>
          <div>
            <div>
              <h3>Email</h3>
            </div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => handleEmail(e)}
              className="input-boxes"
              disabled={editEmail ? "" : "disabled"}
            />
          </div>
          <input
            type="button"
            value="Save"
            className="submit-button"
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
            className="submit-button"
            onClick={() => {
              cancelEdit();
            }}
          />
        </form>
      </Modal>
    </div>
    <div className="containers">
      <h2 className="titles">Current Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Manage</th>
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
                  <span
                    className="table-button"
                    onClick={() => {
                      let response = window.confirm(
                        "Are you sure you want to delete this user?"
                      );
                      if (response) {
                        emails.forEach(emailTwo => {
                          let { userOne, userTwo } = orderEmails(
                            email,
                            emailTwo
                          );
                          if (
                            checkForDebtInstance(debtList, userOne, userTwo)
                          ) {
                            deleteDebtMap({
                              ownerEmail: userOne,
                              slaveEmail: userTwo
                            });
                          }
                        });

                        deleteUser({ email: email });
                      }
                    }}
                  >
                    Delete
                  </span>
                  <span
                    className="table-button"
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
                      if (!editEmail) {
                        setTimeout(() => {
                          alert(
                            "Note, only the first and last name can be changed for this user as they are involved in existing debts"
                          );
                        }, 100);
                      }
                    }}
                  >
                    Edit
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);
