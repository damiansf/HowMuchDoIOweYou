import React from 'react';
import AddUser from './components/addUser'

export default class Main extends React.Component {

  render() {
    console.warn(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            How Much Do I Owe You?
          </p>
        </header>
        <AddUser addUser={this.props.addUser} />
      </div>
    );
  }
}
