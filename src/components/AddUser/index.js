import React from "react";

export const AddUser = ({
  handleFirstName,
  handleLastName,
  handleEmail,
  addUser,
  emails,
  firstName,
  lastName,
  email
}) => (
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
      />
    </label>
    <input
      type="button"
      value="Submit"
      onClick={() => {
        if (!emails.includes(email)) {
          addUser({
            firstName: firstName,
            lastName: lastName,
            email: email
          });
          alert("User added");
        } else {
          alert("User with same email already exists");
        }
      }}
    />
  </form>
);
