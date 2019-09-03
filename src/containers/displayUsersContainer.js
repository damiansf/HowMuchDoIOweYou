import { DisplayUsers } from "../components/DisplayUsers/index";
import React from "react";
import { deleteUser, deleteDebtMap } from "../actions/actionDefs";
import { checkForDebtInstance, orderEmails } from "../utils";
import { connect } from "react-redux";
import Modal from "react-modal";

Modal.setAppElement("#root");

class AddUserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      firstName: "",
      lastName: "",
      editEmail: false
    };

    this.editUser = this.editUser.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  editUser(email, editEmail) {
    this.setState({
      modalIsOpen: true,
      firstName: this.props.users[email].firstName,
      lastName: this.props.users[email].lastName,
      editEmail: editEmail
    });
  }

  cancelEdit() {
    this.setState({
      modalIsOpen: false,
      firstName: "",
      lastName: "",
      editEmail: false
    });
  }

  saveEdit() {
    this.setState({
      modalIsOpen: false,
      firstName: "",
      lastName: "",
      editEmail: false
    });
  }

  render() {
    return (
      <div>
        <DisplayUsers
          users={this.props.users}
          emails={this.props.emails}
          debtList={this.props.debtList}
          deleteUser={this.props.deleteUser}
          deleteDebtMap={this.props.deleteDebtMap}
          checkForDebtInstance={checkForDebtInstance}
          editUser={this.editUser}
          orderEmails={orderEmails}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.cancelEdit}
          contentLabel="Edit User"
        >
          <button onClick={this.cancelEdit}>close</button>
          <span>
            {this.state.editEmail
              ? ""
              : "Note, only the first and last name can be changed for this user as they are involved in debts"}
          </span>
          <span>{this.state.firstName}</span>
          <span>{this.state.lastName}</span>
          <form />
        </Modal>
      </div>
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
