import React from "react";
import AddUserContainer from "./containers/addUserContainer";
import AddDebtContainer from "./containers/addDebtContainer";
import DisplayDebtsContainer from "./containers/displayDebtsContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p>How Much Do I Owe You?</p>
        </header>
        <Router>
          <Route path="/addUser" component={AddUserContainer} />
          <Route path="/addDebt" component={AddDebtContainer} />
          <Route path="/displayDebts" component={DisplayDebtsContainer} />
        </Router>
        <a href="/addUser">Add User</a>
        <br></br>
        <a href="/addDebt">Add Debt</a>
        <br></br>
        <a href="/displayDebts">Display Debts</a>
      </div>
    );
  }
}
