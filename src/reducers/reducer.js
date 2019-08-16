import * as actionConst from '../actions/action-constants';

import {checkForDebtInstance} from '../utils';

const initialState = {
  emails: [],
  users: {},
  debtMap: {},
  debtList: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConst.addUser: {
      return {
        ...state,
        emails: [...state.emails, action.email],
        users: {
          ...state.users,
          [action.email]: action.payload
        }
      }
    }
    case actionConst.addDebt: {

      let id = action.payload.userIDOne + action.payload.userIDTwo;

      if(checkForDebtInstance(state.debtList, action.payload.userIDOne, action.payload.userIDTwo)) {

        return {
          ...state,
          debtMap: {
            ...state.debtMap,
            [id]: {
              debts: [
                ...state.debtMap[id].debts,
                action.payload
              ]
            }
          }
        }

      } else {
        return {
          ...state,
          debtList: [...state.debtList, id],
          debtMap: {
            ...state.debtMap,
            [id]: {
              debts: [
                action.payload
              ]
            }
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
