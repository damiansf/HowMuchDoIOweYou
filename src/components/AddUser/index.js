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
  <div className="containers">
    <h2 className="titles">Create User</h2>
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
          autoComplete="new-password"
          className="input-boxes"
          onChange={e => handleEmail(e)}
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="submit-button"
        onClick={() => {
          if (!emails.includes(email)) {
            if (firstName !== "" || lastName !== "" || email !== "") {
              addUser({
                firstName: firstName,
                lastName: lastName,
                email: email
              });
            } else {
              alert("Please fill in all fields");
            }
          } else {
            alert("User with same email already exists");
          }
        }}
      />
    </form>
  </div>
);
