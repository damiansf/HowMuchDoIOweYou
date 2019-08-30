import { DisplayUsers } from "../components/DisplayUsers/index";
import React from "react";
import { connect } from "react-redux";

class AddUserContainer extends React.Component {
  render() {
    return <DisplayUsers users={this.props.users} emails={this.props.emails} />;
  }
}

const mapStateToProps = state => ({
  users: state.users,
  emails: state.emails
});

export default connect(
  mapStateToProps,
  null
)(AddUserContainer);
