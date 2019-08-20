import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxCookiesMiddleware from "redux-cookies-middleware";
import { getStateFromCookies } from "redux-cookies-middleware";

const defaultState = {
  emails: [],
  users: {},
  debtMap: {},
  debtList: []
};


const cookiePaths = {
    "emails": { name: "HMDIOY_EMAILS" },
    "users": { name: "HMDIOY_USERS" },
    "debtMap": { name: "HMDIOY_DEBTMAP" },
    "debtList": { name: "HMDIOY_DEBTLIST" },
}

let initialState = getStateFromCookies(defaultState, cookiePaths);

if(!initialState.emails) {
    initialState.emails = [];
}

if(!initialState.users) {
    initialState.users = {};
}

if(!initialState.debtMap) {
    initialState.debtMap = {};
}

if(!initialState.debtList) {
    initialState.debtList = [];
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(reduxCookiesMiddleware(cookiePaths)))
);

export default store;
