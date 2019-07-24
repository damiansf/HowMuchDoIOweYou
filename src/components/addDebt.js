import React from 'react';

export default class AddDebt extends React.Component {

  constructor() {
    super();

    this.state = {
      amount: "",
      notes: "",
      emailOne: "",
      emailTwo: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleOwnerEmail = this.handleOwnerEmail.bind(this);
    this.handleSlaveEmail = this.handleSlaveEmail.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
  }

  handleAmount(event) {
    if (!isNaN(event.target.value)) {
      this.setState({amount: event.target.value});
    }
  }

  handleNotes(event) {
    this.setState({notes: event.target.value});
  }

  handleOwnerEmail(event) {
    this.setState({emailOne: event.target.value});
  }

  handleSlaveEmail(event) {
    this.setState({emailTwo: event.target.value});
  }

  handleSubmit(event) {
    var obj = {
      userOne: this.state.emailOne ? this.state.emailOne : this.props.emails[0],
      userTwo: this.state.emailTwo ? this.state.emailTwo : this.props.emails[0],
      amount: this.state.amount,
      notes: this.state.notes
    }
    this.props.addDebt(obj);
    alert('User Debt added');
  }

  render() {
    return (
      <form>
        <select onChange={this.handleOwnerEmail}>
          {this.props.emails.map((email) => <option key={email} value={email} >{email}</option>)}
        </select>
        <select onChange={this.handleSlaveEmail}>
          {this.props.emails.map((email) => <option key={email} value={email} >{email}</option>)}
        </select>
        <label>
          Amount:
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleAmount} />
        </label>
        <label>
          Notes:
          <input type="text" name="notes" value={this.state.notes} onChange={this.handleNotes} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}
