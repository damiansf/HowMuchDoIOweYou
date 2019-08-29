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
      emailOne: "",
      emailTwo: ""
    };
  }

  render() {
    return (
      <AddDebt
        emails={this.props.emails}
        users={this.props.users}
        notes={this.state.notes}
        amount={this.state.amount}
        emailOne={this.state.emailOne}
        emailTwo={this.state.emailTwo}
        addDebt={this.props.addDebt}
        handleOwnerEmail={event =>
          this.setState({ emailOne: event.target.value })
        }
        handleSlaveEmail={event =>
          this.setState({ emailTwo: event.target.value })
        }
        handleNotes={event => this.setState({ notes: event.target.value })}
        handleAmount={event => {
          if (!isNaN(event.target.value)) {
            this.setState({ amount: event.target.value });
          }
        }}
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
