import React from "react";
import AddDebtContainer from "./addDebtContainer";
import DisplayDebtsContainer from "./displayDebtsContainer";

export default class ManageDebtsContainer extends React.Component {
  render() {
    return (
      <div>
        <AddDebtContainer />
        <DisplayDebtsContainer />
      </div>
    );
  }
}
