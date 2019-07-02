import * as actionConst from '../actions/action-constants';

const initialState = {
  emails: [],
  users: {},
  debtMap: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConst.addUser: {
      return {
        emails: [...state.emails, action.email],
        users: {
          ...state.users,
          [action.email]: action.payload
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
