import React from "react";

export default class DisplayDebts extends React.Component {
  constructor() {
    super();

    this.state = {
      data: ""
    };

    this.loadDebtMap = this.loadDebtMap.bind(this);
    this.getIdentifier = this.getIdentifier.bind(this);
  }

  loadDebtMap(event) {
    let str = "";
    this.props.emails.forEach(email => {
      if (event.target.value.localeCompare(email) < 0) {
        if (this.props.debtList.includes(event.target.value + email)) {
          str += JSON.stringify(this.props.debtMap[event.target.value + email]);
        }
      } else {
        if (this.props.debtList.includes(email + event.target.value)) {
          str += JSON.stringify(this.props.debtMap[email + event.target.value]);
        }
      }
    });

    this.setState({ data: str });
  }

  getIdentifier(email) {
    let user = this.props.users[email];
    return user.firstName + " " + user.lastName + " (" + email + ")";
  }

  render() {
    return (
      <div>
        <select onChange={this.loadDebtMap}>
          <option>--</option>
          {this.props.emails.map(email => (
            <option key={email} value={email}>
              {this.getIdentifier(email)}
            </option>
          ))}
        </select>
        <div>{this.state.data}</div>
      </div>
    );
  }
}
