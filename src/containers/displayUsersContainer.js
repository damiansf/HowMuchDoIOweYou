import { DisplayUsers } from "../components/DisplayUsers/index";
import React from "react";
import { deleteUser, deleteDebtMap } from "../actions/actionDefs";
import {checkForDebtInstance} from "../utils";
import { connect } from "react-redux";

class AddUserContainer extends React.Component {
  render() {
    return (
      <DisplayUsers
        users={this.props.users}
        emails={this.props.emails}
        debtList={this.props.debtList}
        deleteUser={this.props.deleteUser}
        deleteDebtMap={this.props.deleteDebtMap}
        checkForDebtInstance={checkForDebtInstance}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  emails: state.emails,
  debtList: state.debtList
});

const mapDispatchToProps = dispatch => ({
  deleteUser: data => dispatch(deleteUser(data)),
  deleteDebtMap: data => dispatch(deleteDebtMap(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
