import React from "react";
import AddDebtContainer from "./addDebtContainer";
import DisplayDebtsContainer from "./displayDebtsContainer";

export default class ManageDebtsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0
    };
  }

  render() {
    return (
      <div>
        <AddDebtContainer
          debtChangeCounter={() => this.setState({ id: this.state.id + 1 })}
        />
        <DisplayDebtsContainer key={this.state.id} />
      </div>
    );
  }
}
