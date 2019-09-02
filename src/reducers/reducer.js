import * as actionConst from "../actions/action-constants";

import { checkForDebtInstance } from "../utils";

function reducer(state, action) {
  switch (action.type) {
    case actionConst.addDebtInstance: {
      return {
        ...state,
        debtList: [...state.debtList, action.payload.key],
        debtMap: {
          ...state.debtMap,
          [action.payload.key]: {
            debts: action.payload.debts
          }
        }
      };
    }
    case actionConst.deleteDebt: {
      let id = action.payload.userIDOne + action.payload.userIDTwo;
      return {
        ...state,
        debtMap: {
          ...state.debtMap,
          [id]: {
            debts: [
              ...state.debtMap[id].debts.slice(0, action.payload.index),
              ...state.debtMap[id].debts.slice(action.payload.index + 1)
            ]
          }
        }
      };
    }
    case actionConst.deleteUser: {
      let newUserMap = {};
      state.emails.forEach(email => {
        if (email !== action.payload.email) {
          newUserMap[email] = state.users[email];
        }
      });
      return {
        ...state,
        emails: state.emails.filter(email => email !== action.payload.email),
        users: newUserMap
      };
    }
    case actionConst.deleteDebtMap: {
      let id = action.payload.userIDOne + action.payload.userIDTwo;
      let newDebtMap = {};
      state.debtList.forEach(debt => {
        if (debt !== id) {
          newDebtMap[debt] = state.debtMap[debt];
        }
      });
      return {
        ...state,
        debtList: state.debtList.filter(debt => debt !== id),
        debtMap: newDebtMap
      };
    }
    case actionConst.clearData: {
      return {
        emails: [],
        users: {},
        debtMap: {},
        debtList: []
      };
    }
    case actionConst.addUser: {
      return {
        ...state,
        emails: [...state.emails, action.email],
        users: {
          ...state.users,
          [action.email]: action.payload
        }
      };
    }
    case actionConst.addDebt: {
      let id = action.payload.userIDOne + action.payload.userIDTwo;

      if (
        checkForDebtInstance(
          state.debtList,
          action.payload.userIDOne,
          action.payload.userIDTwo
        )
      ) {
        return {
          ...state,
          debtMap: {
            ...state.debtMap,
            [id]: {
              debts: [...state.debtMap[id].debts, action.payload]
            }
          }
        };
      } else {
        return {
          ...state,
          debtList: [...state.debtList, id],
          debtMap: {
            ...state.debtMap,
            [id]: {
              debts: [action.payload]
            }
          }
        };
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
