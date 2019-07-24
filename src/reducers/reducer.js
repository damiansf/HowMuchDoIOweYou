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
          debtList: [...state.debtList, action.userIDOne + action.userIDTwo],
          debtMap: {
            ...state.debtMap,
            [id]: action.payload
          }
        }

      } else {
        return {
          ...state,
          debtList: [...state.debtList, action.userIDOne + action.userIDTwo],
          debtMap: {
            ...state.debtMap,
            [id]: action.payload
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
