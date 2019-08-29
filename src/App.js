import React from "react";
import AddUserContainer from "./containers/addUserContainer";
import AddDebtContainer from "./containers/addDebtContainer";
import DisplayDebtsContainer from "./containers/displayDebtsContainer";
import { HashRouter, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p>How Much Do I Owe You?</p>
        </header>
        <HashRouter basename="/">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addUser">Add User</Link>
              </li>
              <li>
                <Link to="/addDebt">Add Debt</Link>
              </li>
              <li>
                <Link to="/displayDebts">Display Debts</Link>
              </li>
            </ul>
            <Route path="/addUser" component={AddUserContainer} />
            <Route path="/addDebt" component={AddDebtContainer} />
            <Route path="/displayDebts" component={DisplayDebtsContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
