import React from "react";
import AddUserContainer from "./containers/addUserContainer";
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
        </Router>
      </div>
    );
  }
}
