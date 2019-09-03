import { DisplayUsers } from "../components/DisplayUsers/index";
import React from "react";
import { deleteUser, deleteDebtMap, addUser } from "../actions/actionDefs";
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
      email: "",
      oldEmail: "",
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
      email: email,
      oldEmail: email,
      editEmail: editEmail
    });
  }

  cancelEdit() {
    this.setState({
      modalIsOpen: false,
      firstName: "",
      lastName: "",
      email: "",
      editEmail: false,
      oldEmail: ""
    });
  }

  saveEdit() {
    this.setState({
      modalIsOpen: false,
      firstName: "",
      lastName: "",
      email: "",
      editEmail: false,
      oldEmail: ""
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
          modalIsOpen={this.state.modalIsOpen}
          cancelEdit={this.cancelEdit}
          editEmail={this.state.editEmail}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          saveEdit={this.saveEdit}
          email={this.state.email}
          handleLastName={event =>
            this.setState({ lastName: event.target.value })
          }
          handleFirstName={event =>
            this.setState({ firstName: event.target.value })
          }
          handleEmail={event => this.setState({ email: event.target.value })}
          addUser={this.props.addUser}
          oldEmail={this.state.oldEmail}
        />
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
  deleteDebtMap: data => dispatch(deleteDebtMap(data)),
  addUser: data => dispatch(addUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
