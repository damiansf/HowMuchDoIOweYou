import React from 'react';

export default class AddUser extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

  }

  handleSubmit(event) {
    var obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    }
    this.props.addUser(obj);
    alert('User added');
  }

  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastName(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          FirstName:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFirstName} />
        </label>
        <label>
          LastName:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleLastName} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}
