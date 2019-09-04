import React from "react";
import ManageDataContainer from "./containers/manageDataContainer";
import ManageUsersContainer from "./containers/manageUsersContainer";
import ManageDebtsContainer from "./containers/manageDebtsContainer";
import HomePageContainer from "./containers/homePageContainer";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h2 className="app-title">How Much Do I Owe You?</h2>
        <HashRouter basename="/">
          <div>
            <div className="nav">
              <NavLink
                className="non-selected-link"
                activeClassName="selected"
                exact
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="non-selected-link"
                activeClassName="selected"
                exact
                to="/manageUsers"
              >
                Manage Users
              </NavLink>

              <NavLink
                className="non-selected-link"
                activeClassName="selected"
                exact
                to="/manageDebts"
              >
                Manage Debts
              </NavLink>

              <NavLink
                className="non-selected-link"
                activeClassName="selected"
                exact
                to="/manageData"
              >
                Manage Data
              </NavLink>
            </div>
            <Switch>
              <Route path="/manageDebts" component={ManageDebtsContainer} />
              <Route path="/manageUsers" component={ManageUsersContainer} />
              <Route path="/manageData" component={ManageDataContainer} />
              <Route path="/" component={HomePageContainer} />
            </Switch>
          </div>
        </HashRouter>
        <p className="creator-info">Created by Damian Sandhu-Franceschi</p>
        <a
          className="bug creator-info"
          href="https://github.com/damiansf/HowMuchDoIOweYou/issues"
        >
          Report a bug
        </a>
      </div>
    );
  }
}
