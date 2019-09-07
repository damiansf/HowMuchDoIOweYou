import { DisplayDebts } from "../components/DisplayDebts/index";
import { deleteDebtMap, deleteDebt } from "../actions/actionDefs";
import { getIdentifierString } from "../utils";
import React from "react";
import { connect } from "react-redux";

const noTransactions = <h3 className="no-outstanding">No Outstanding Debts</h3>;
const debtMapTableHead = (
  <thead>
    <tr>
      <th className="debt-map-name-cell">Debitor</th>
      <th className="debt-map-name-cell">Creditor</th>
      <th>Amount</th>
      <th className="notes-cell">Notes</th>
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
        <td>{slaveEmail}</td>
        <td>{ownerEmail}</td>
        <td>{amount}</td>
        <td>
          <button
            onClick={() => {
              this.props.deleteDebtMap({
                ownerEmail: ownerEmail,
                slaveEmail: slaveEmail
              });
              if (this.state.numDebts === 1) {
                this.setState({
                  numDebts: 0,
                  allDebtsData: null,
                  allDebtsTotal: 0
                });
              } else {
                this.setState({ numDebts: this.state.numDebts - 1 });
              }
            }}
          />
        </td>
      </tr>
    );
  }

  buildCreditsTable(ownerEmail, slaveEmail, amount) {
    return (
      <tr key={ownerEmail + slaveEmail + amount}>
        <td>{ownerEmail}</td>
        <td>{slaveEmail}</td>
        <td>{amount}</td>
        <td>
          <button
            onClick={() => {
              this.props.deleteDebtMap({
                ownerEmail: ownerEmail,
                slaveEmail: slaveEmail
              });
              if (this.state.numCredits === 1) {
                this.setState({
                  numCredits: 0,
                  allCreditsData: null,
                  allCreditsTotal: 0
                });
              } else {
                this.setState({ numCredits: this.state.numCredits - 1 });
              }
            }}
          />
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
          <td>{Math.abs(debt.amount)}</td>
          <td>{debt.notes}</td>
          <td>
            <span
              className="table-button"
              onClick={() => {
                let response = window.confirm(
                  "Are you sure you want to delete this debts?"
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
          this.setState({ singleSlaveEmail: event.target.value })
        }
        handleSingleOwnerEmail={event =>
          this.setState({ singleOwnerEmail: event.target.value })
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
        setTransactionExisting={noTransactionsExisting =>
          this.setState({ noTransactionsExisting: noTransactionsExisting })
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
        debtMapTableHead={this.state.debtMapData ? debtMapTableHead : null}
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
