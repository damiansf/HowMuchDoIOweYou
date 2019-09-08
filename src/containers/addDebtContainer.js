import { AddDebt } from "../components/AddDebt/index";
import { addDebt } from "../actions/actionDefs";
import React from "react";
import { connect } from "react-redux";

class AddDebtContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      notes: "",
      ownerEmail: "Select the Creditor",
      slaveEmail: "Select the Debitor"
    };
  }

  render() {
    return (
      <AddDebt
        emails={this.props.emails}
        users={this.props.users}
        notes={this.state.notes}
        amount={this.state.amount}
        ownerEmail={this.state.ownerEmail}
        slaveEmail={this.state.slaveEmail}
        addDebt={this.props.addDebt}
        handleOwnerEmail={event =>
          this.setState({ ownerEmail: event.target.value })
        }
        handleSlaveEmail={event =>
          this.setState({ slaveEmail: event.target.value })
        }
        handleNotes={event => this.setState({ notes: event.target.value })}
        handleAmount={event => {
          if (!isNaN(event.target.value)) {
            this.setState({ amount: event.target.value });
          }
        }}
        debtChangeCounter={this.props.debtChangeCounter}
      />
    );
  }
}

const mapStateToProps = state => ({
  emails: state.emails,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addDebt: data => dispatch(addDebt(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDebtContainer);
