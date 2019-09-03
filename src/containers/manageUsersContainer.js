import React from "react";
import AddUserContainer from "./addUserContainer";
import DisplayUsersContainer from "./displayUsersContainer";

export default class ManageUsersContainer extends React.Component {
    render() {
        return (
          <div>
            <AddUserContainer />
            <DisplayUsersContainer />
          </div>
        );
      }
}