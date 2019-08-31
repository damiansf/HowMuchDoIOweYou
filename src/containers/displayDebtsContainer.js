import { DisplayDebts } from "../components/DisplayDebts/index";
import { deleteDebtMap, deleteDebt } from "../actions/actionDefs";
import React from "react";
import { connect } from "react-redux";

class DisplayDebtsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      debtMapData: null,
      ownerEmail: "",
      slaveEmail: "",
      singleSlaveEmail: "",
      debtMapTotal: 0,
      allDebtsData: null,
      allDebtsTotal: 0,
      singleOwnerEmail: "",
      allCreditsTotal: 0,
      allCreditsData: null
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
            }}
          />
        </td>
      </tr>
    );
  }

  buildDebtMapTable(data, multiplier) {
    if (multiplier === 1) {
      return data.debts.map((debt, index) => {
        return (
          <tr key={index}>
            <td>{debt.userIDOne}</td>
            <td>{debt.userIDTwo}</td>
            <td>{debt.amount}</td>
            <td>{debt.notes}</td>
            <td>
              <button
                onClick={() => {
                  if (data.debts.length < 1) {
                    this.props.deleteDebtMap({
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                  } else {
                    this.props.deleteDebt({
                      index: index,
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                  }
                }}
              />
            </td>
          </tr>
        );
      });
    } else {
      return data.debts.map((debt, index) => {
        return (
          <tr key={index}>
            <td>{debt.userIDTwo}</td>
            <td>{debt.userIDOne}</td>
            <td>{debt.amount * multiplier}</td>
            <td>{debt.notes}</td>
            <td>
              <button
                onClick={() => {
                  if (data.debts.length < 1) {
                    this.props.deleteDebtMap({
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                  } else {
                    this.props.deleteDebt({
                      index: index,
                      ownerEmail: debt.userIDTwo,
                      slaveEmail: debt.userIDOne
                    });
                  }
                }}
              />
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <DisplayDebts
        handleOwnerEmail={event =>
          this.setState({ ownerEmail: event.target.value })
        }
        handleSlaveEmail={event =>
          this.setState({ slaveEmail: event.target.value })
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
      />
    );
  }
}

const mapStateToProps = state => ({
  emails: state.emails,
  users: state.users,
  debtMap: state.debtMap,
  debtList: state.debtList,
  deleteDebtMap: state.deleteDebtMap,
  deleteDebt: state.deleteDebt
});

const mapDispatchToProps = dispatch => ({
  deleteDebtMap: data => dispatch(deleteDebtMap(data)),
  deleteDebt: data => dispatch(deleteDebt(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayDebtsContainer);
