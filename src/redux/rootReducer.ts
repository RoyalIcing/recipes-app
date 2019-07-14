import { combineReducers } from "redux";

import { counter } from "./counter/reducer";

export const rootReducer = combineReducers({
  counter
});
