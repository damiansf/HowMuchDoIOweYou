import { DisplayDebts } from "../components/DisplayDebts/index";
import { deleteDebtMap, deleteDebt } from "../actions/actionDefs";
import { getIdentifierString } from "../utils";
import React from "react";
import { connect } from "react-redux";

const noTransactions = <h3 className="no-outstanding">No Unpaid Debts</h3>;
const debtMapTableHead = (
  <thead>
    <tr>
      <th className="name-cell">Debitor</th>
      <th className="name-cell">Creditor</th>
      <th>Amount</th>
      <th className="notes-cell">Notes</th>
      <th>Delete Debt</th>
    </tr>
  </thead>
);

const noDebts = <h3 className="no-outstanding">You Don't Owe Anyone Money!</h3>;
const debtTableHead = (
  <thead>
    <tr>
      <th className="name-cell">Debitor</th>
      <th className="name-cell">Creditor</th>
      <th>Total Amount</th>
      <th>Delete Debts</th>
    </tr>
  </thead>
);

const noCredits = <h3 className="no-outstanding">No One Owes You Money</h3>;
const creditTableHead = (
  <thead>
    <tr>
      <th className="name-cell">Creditor</th>
      <th className="name-cell">Debitor</th>
      <th>Total Amount</th>
      <th>Delete Debt</th>
    </tr>
  </thead>
);

class DisplayDebtsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      debtMapData: null,
      ownerEmail: "Select Second User",
      slaveEmail: "Select First User",
      singleSlaveEmail: "Select a Debitor",
      debtMapTotal: 0,
      allDebtsData: null,
      noTransactionsExisting: false,
      noCreditsExisting: false,
      noDebtsExisiting: false,
      allDebtsTotal: 0,
      singleOwnerEmail: "Select a Creditor",
      allCreditsTotal: 0,
      allCreditsData: null,
      numDebts: 0,
      numCredits: 0
    };

    this.buildDebtMapTable = this.buildDebtMapTable.bind(this);
    this.buildDebtsTable = this.buildDebtsTable.bind(this);
    this.buildCreditsTable = this.buildCreditsTable.bind(this);
  }

  buildDebtsTable(ownerEmail, slaveEmail, amount) {
    return (
      <tr key={ownerEmail + slaveEmail + amount}>
        <td>{getIdentifierString(slaveEmail, this.props.users[slaveEmail])}</td>
        <td>{getIdentifierString(ownerEmail, this.props.users[ownerEmail])}</td>
        <td>{amount + "$"}</td>
        <td>
          <span
            className="table-button"
            onClick={() => {
              let response = window.confirm(
                "Are you sure you want to delete this debt record?"
              );

              if (response) {
                this.props.deleteDebtMap({
                  ownerEmail: ownerEmail,
                  slaveEmail: slaveEmail
                });
                if (this.state.numDebts === 1) {
                  this.setState({
                    numDebts: 0,
                    allDebtsData: null,
                    allDebtsTotal: 0,
                    noDebtsExisiting: true
                  });
                } else {
                  this.setState({ numDebts: this.state.numDebts - 1 });
                }
              }
            }}
          >
            Delete
          </span>
        </td>
      </tr>
    );
  }

  buildCreditsTable(ownerEmail, slaveEmail, amount) {
    return (
      <tr key={ownerEmail + slaveEmail + amount}>
        <td>{getIdentifierString(ownerEmail, this.props.users[ownerEmail])}</td>
        <td>{getIdentifierString(slaveEmail, this.props.users[slaveEmail])}</td>
        <td>{amount + "$"}</td>
        <td>
          <span
            className="table-button"
            onClick={() => {
              let response = window.confirm(
                "Are you sure you want to delete this credit record?"
              );

              if (response) {
                this.props.deleteDebtMap({
                  ownerEmail: ownerEmail,
                  slaveEmail: slaveEmail
                });
                if (this.state.numCredits === 1) {
                  this.setState({
                    numCredits: 0,
                    allCreditsData: null,
                    allCreditsTotal: 0,
                    noCreditsExisting: true
                  });
                } else {
                  this.setState({ numCredits: this.state.numCredits - 1 });
                }
              }
            }}
          >
            Delete
          </span>
        </td>
      </tr>
    );
  }

  buildDebtMapTable(data, identifierOrder) {
    return data.debts.map((debt, index) => {
      return (
        <tr key={index}>
          <td>
            {debt.amount >= 0
              ? getIdentifierString(
                  debt.userIDOne,
                  this.props.users[debt.userIDOne]
                )
              : getIdentifierString(
                  debt.userIDTwo,
                  this.props.users[debt.userIDTwo]
                )}
          </td>
          <td>
            {debt.amount >= 0
              ? getIdentifierString(
                  debt.userIDTwo,
                  this.props.users[debt.userIDTwo]
                )
              : getIdentifierString(
                  debt.userIDOne,
                  this.props.users[debt.userIDOne]
                )}
          </td>
          <td>{Math.abs(debt.amount) + "$"}</td>
          <td>{debt.notes}</td>
          <td>
            <span
              className="table-button"
              onClick={() => {
                let response = window.confirm(
                  "Are you sure you want to delete this debt?"
                );

                if (response) {
                  if (data.debts.length <= 1) {
                    this.props.deleteDebtMap({
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                    this.setState({
                      debtMapData: null,
                      debtMapTotal: 0
                    });
                  } else {
                    this.props.deleteDebt({
                      index: index,
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                    let newTotal =
                      identifierOrder === 1
                        ? this.state.debtMapTotal - debt.amount
                        : this.state.debtMapTotal + debt.amount;
                    let newData = data;
                    newData.debts.splice(index, 1);
                    this.setState({
                      debtMapData: this.buildDebtMapTable(
                        newData,
                        identifierOrder
                      ),
                      debtMapTotal: newTotal
                    });
                  }
                }
              }}
            >
              Delete
            </span>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <DisplayDebts
        handleOwnerEmail={event =>
          this.setState({
            ownerEmail: event.target.value,
            debtMapData: null,
            debtMapTotal: 0,
            noTransactionsExisting: false
          })
        }
        handleSlaveEmail={event =>
          this.setState({
            slaveEmail: event.target.value,
            debtMapData: null,
            debtMapTotal: 0,
            noTransactionsExisting: false
          })
        }
        handleSingleSlaveEmail={event =>
          this.setState({
            singleSlaveEmail: event.target.value,
            allDebtsData: null,
            allDebtsTotal: 0,
            noDebtsExisiting: false,
            numDebts: 0
          })
        }
        handleSingleOwnerEmail={event =>
          this.setState({
            singleOwnerEmail: event.target.value,
            allCreditsData: null,
            allCreditsTotal: 0,
            noCreditsExisting: false,
            numCredits: 0
          })
        }
        setTotalDebtMapAmount={debtMapTotal =>
          this.setState({ debtMapTotal: debtMapTotal })
        }
        setDebtMapData={debtMapData =>
          this.setState({ debtMapData: debtMapData })
        }
        setTotalDebtsAmount={allDebtsTotal =>
          this.setState({ allDebtsTotal: allDebtsTotal })
        }
        setTotalCreditsAmount={allCreditsTotal =>
          this.setState({ allCreditsTotal: allCreditsTotal })
        }
        setDebtsData={allDebtsData =>
          this.setState({ allDebtsData: allDebtsData })
        }
        setCreditsData={allCreditsData =>
          this.setState({ allCreditsData: allCreditsData })
        }
        setNumDebts={numDebts => this.setState({ numDebts: numDebts })}
        setNumCredits={numCredits => this.setState({ numCredits: numCredits })}
        setNoTransactionExisting={noTransactionsExisting =>
          this.setState({ noTransactionsExisting: noTransactionsExisting })
        }
        setNoDebtsExisiting={noDebtsExisiting =>
          this.setState({ noDebtsExisiting: noDebtsExisiting })
        }
        setNoCreditsExisting={noCreditsExisting =>
          this.setState({ noCreditsExisting: noCreditsExisting })
        }
        buildDebtMapTable={this.buildDebtMapTable}
        buildDebtsTable={this.buildDebtsTable}
        buildCreditsTable={this.buildCreditsTable}
        emails={this.props.emails}
        users={this.props.users}
        debtMap={this.props.debtMap}
        debtList={this.props.debtList}
        ownerEmail={this.state.ownerEmail}
        slaveEmail={this.state.slaveEmail}
        debtMapData={this.state.debtMapData}
        debtMapTotal={this.state.debtMapTotal}
        allDebtsData={this.state.allDebtsData}
        allDebtsTotal={this.state.allDebtsTotal}
        singleSlaveEmail={this.state.singleSlaveEmail}
        singleOwnerEmail={this.state.singleOwnerEmail}
        allCreditsTotal={this.state.allCreditsTotal}
        allCreditsData={this.state.allCreditsData}
        noTransactionsExisting={this.state.noTransactionsExisting}
        noTransactions={
          this.state.noTransactionsExisting ? noTransactions : null
        }
        noDebtsExisiting={this.state.noDebtsExisiting}
        noDebts={this.state.noDebtsExisiting ? noDebts : null}
        noCreditsExisting={this.state.noCreditsExisting}
        noCredits={this.state.noCreditsExisting ? noCredits : null}
        debtMapTableHead={this.state.debtMapData ? debtMapTableHead : null}
        debtTableHead={this.state.allDebtsData ? debtTableHead : null}
        creditTableHead={this.state.allCreditsData ? creditTableHead : null}
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

const mapDispatchToProps = dispatch => ({
  deleteDebtMap: data => dispatch(deleteDebtMap(data)),
  deleteDebt: data => dispatch(deleteDebt(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayDebtsContainer);
