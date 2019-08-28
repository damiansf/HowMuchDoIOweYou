import React from "react";

export default class DisplayDebts extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      emailOne: "",
      emailTwo: "",
      amount: 0
    };

    this.getIdentifier = this.getIdentifier.bind(this);
    this.handleOwnerEmail = this.handleOwnerEmail.bind(this);
    this.handleSlaveEmail = this.handleSlaveEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOwnerEmail(event) {
    this.setState({ emailOne: event.target.value });
  }

  handleSlaveEmail(event) {
    this.setState({ emailTwo: event.target.value });
  }

  handleSubmit() {
    let str;
    let total = 0;

    if (this.state.emailOne.localeCompare(this.state.emailTwo) < 0) {
      if (
        this.props.debtList.includes(this.state.emailOne + this.state.emailTwo)
      ) {
        str = this.buildTableBody(
          this.props.debtMap[this.state.emailOne + this.state.emailTwo],
          -1
        );
        this.props.debtMap[this.state.emailOne + this.state.emailTwo].debts.map(
          (debt, index) => {
            total += debt.amount * -1;
          }
        );
      }
    } else {
      if (
        this.props.debtList.includes(this.state.emailTwo + this.state.emailOne)
      ) {
        str = this.buildTableBody(
          this.props.debtMap[this.state.emailTwo + this.state.emailOne],
          1
        );
        this.props.debtMap[this.state.emailTwo + this.state.emailOne].debts.map(
          (debt, index) => {
            total += debt.amount;
          }
        );
      }
    }

    this.setState({ data: str, amount: total });
  }

  buildTableBody(data, multiplier) {
    console.log(data);
    if (multiplier === 1) {
      return data.debts.map((debt, index) => {
        return (
          <tr key={index}>
            <td>{debt.userIDOne}</td>
            <td>{debt.userIDTwo}</td>
            <td>{debt.amount}</td>
            <td>{debt.notes}</td>
            <td>
              <button />
            </td>
          </tr>
        );
      });
    } else {
      return data.debts.map((debt, index) => {
        return (
          <tr key={index}>
            <td>{debt.userIDTwo}</td>
            <td>{debt.userIDOne}</td>
            <td>{debt.amount * multiplier}</td>
            <td>{debt.notes}</td>
            <td>
              <button />
            </td>
          </tr>
        );
      });
    }
  }

  getIdentifier(email) {
    let user = this.props.users[email];
    return user.firstName + " " + user.lastName + " (" + email + ")";
  }

  render() {
    return (
      <div>
        <form>
          <span>slave</span>
          <select onChange={this.handleSlaveEmail}>
            <option>--</option>
            {this.props.emails.map(email => (
              <option key={email} value={email}>
                {this.getIdentifier(email)}
              </option>
            ))}
          </select>
          <span>owner</span>
          <select onChange={this.handleOwnerEmail}>
            <option>--</option>
            {this.props.emails.map(email => (
              <option key={email} value={email}>
                {this.getIdentifier(email)}
              </option>
            ))}
          </select>
          <input type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
        <table>
          <thead>
            <tr>
              <th>User One</th>
              <th>User Two</th>
              <th>Amount</th>
              <th>Notes</th>
              <th>Delete Debt</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </table>
        <div>
          <span>
            {this.state.emailTwo +
              " Owes " +
              this.state.emailOne +
              this.state.amount}
          </span>
        </div>
      </div>
    );
  }
}
