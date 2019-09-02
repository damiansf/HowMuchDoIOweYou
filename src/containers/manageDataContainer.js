import { ManageData } from "../components/ManageData/index";
import {
  clearData,
  addUser,
  addDebt,
  addDebtInstance
} from "../actions/actionDefs";
import React from "react";
import { connect } from "react-redux";

class ManageDataContainer extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.uploadData = this.uploadData.bind(this);
  }

  uploadData(e) {
    let file = e.target.files[0];

    if (!file.type.includes("json")) {
      alert("Invalid file type, only accept json files");
      return;
    }

    let reader = new FileReader();

    reader.onload = (() => {
      return e => {
        try {
          let obj = JSON.parse(e.target.result);

          obj.emails.forEach(email => {
            if (!this.props.emails.includes(email)) {
              this.props.addUser({
                firstName: obj.users[email].firstName,
                lastName: obj.users[email].lastName,
                email: obj.users[email].email
              });
            }
          });

          obj.debtList.forEach(debt => {
            if (!this.props.debtList.includes(debt)) {
              this.props.addDebtInstance({
                debts: obj.debtMap[debt].debts,
                key: debt
              });
            }
          });
        } catch (error) {
          alert("Error parsing json: " + error);
        }
      };
    })(file);
    reader.readAsText(file);
  }

  render() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      return (
        <ManageData
          clearData={this.props.clearData}
          uploadData={this.uploadData}
          data={URL.createObjectURL(
            new Blob(
              [
                JSON.stringify({
                  users: this.props.users,
                  emails: this.props.emails,
                  debtList: this.props.debtList,
                  debtMap: this.props.debtMap
                })
              ],
              {
                type: "application/json"
              }
            )
          )}
        />
      );
    } else {
      return <span>File API's not available</span>;
    }
  }
}

const mapStateToProps = state => ({
  users: state.users,
  emails: state.emails,
  debtList: state.debtList,
  debtMap: state.debtMap
});

const mapDispatchToProps = dispatch => ({
  clearData: () => dispatch(clearData()),
  addUser: data => dispatch(addUser(data)),
  addDebt: data => dispatch(addDebt(data)),
  addDebtInstance: data => dispatch(addDebtInstance(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageDataContainer);
