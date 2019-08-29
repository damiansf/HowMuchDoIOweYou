import { DisplayDebts } from "../components/DisplayDebts/index";
import React from "react";
import { connect } from "react-redux";

class DisplayDebtsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      displayData: null,
      emailOne: "",
      emailTwo: "",
      totalAmount: 0
    };

    this.buildDebtMapTable = this.buildDebtMapTable.bind(this);
  }

  buildDebtMapTable(data, multiplier) {
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

  render() {
    return (
      <DisplayDebts
        handleOwnerEmail={event =>
          this.setState({ emailOne: event.target.value })
        }
        handleSlaveEmail={event =>
          this.setState({ emailTwo: event.target.value })
        }
        setTotalAmount={totalAmount =>
          this.setState({ totalAmount: totalAmount })
        }
        setData={data => this.setState({ displayData: data })}
        buildDebtMapTable={this.buildDebtMapTable}
        emails={this.props.emails}
        users={this.props.users}
        debtMap={this.props.debtMap}
        debtList={this.props.debtList}
        emailOne={this.state.emailOne}
        emailTwo={this.state.emailTwo}
        displayData={this.state.displayData}
        totalAmount={this.state.totalAmount}
      />
    );
  }
}

const mapStateToProps = state => ({
  emails: state.emails,
  users: state.users,
  debtMap: state.debtMap,
  debtList: state.debtList
});

export default connect(
  mapStateToProps,
  null
)(DisplayDebtsContainer);
