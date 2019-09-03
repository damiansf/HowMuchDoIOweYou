import React from "react";
import ManageDataContainer from "./containers/manageDataContainer";
import ManageUsersContainer from "./containers/manageUsersContainer";
import ManageDebtsContainer from "./containers/manageDebtsContainer";
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
                <Link to="/manageUsers">Manage Users</Link>
              </li>
              <li>
                <Link to="/manageDebts">Manage Debts</Link>
              </li>
              <li>
                <Link to="/manageData">Manage Data</Link>
              </li>
            </ul>
            <Route path="/manageDebts" component={ManageDebtsContainer} />
            <Route path="/manageUsers" component={ManageUsersContainer} />
            <Route path="/manageData" component={ManageDataContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
