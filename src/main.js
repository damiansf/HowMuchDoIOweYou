import React from 'react';
import AddUser from './components/addUser'
import AddDebt from './components/addDebt'
import DisplayDebts from './components/displayDebts'

export default class Main extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            How Much Do I Owe You?
          </p>
        </header>
        <AddUser addUser={this.props.addUser} />
        <AddDebt addDebt={this.props.addDebt} emails={this.props.emails} users={this.props.users}/>
        <DisplayDebts emails={this.props.emails} users={this.props.users} debtMap={this.props.debtMap} debtList={this.props.debtList}/>
      </div>
    );
  }
}
