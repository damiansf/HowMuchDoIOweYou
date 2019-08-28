import { AddUser } from "../components/AddUser/index";
import { addUser } from "../actions/actionDefs";
import React from "react";
import { connect } from "react-redux";

class AddUserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  render() {
    return (
      <AddUser
        email={this.state.email}
        lastName={this.state.lastName}
        firstName={this.state.firstName}
        handleEmail={event => this.setState({ email: event.target.value })}
        handleLastName={event =>
          this.setState({ lastName: event.target.value })
        }
        handleFirstName={event =>
          this.setState({ firstName: event.target.value })
        }
        emails={this.props.emails}
        addUser={this.props.addUser}
      />
    );
  }
}

const mapStateToProps = state => ({
  emails: state.emails
});

const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
