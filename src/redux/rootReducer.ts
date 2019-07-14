import { combineReducers } from "redux";

import { counter } from "./counter/reducer";
import { recipesContent } from "./recipesContent/reducer";

export const rootReducer = combineReducers({
  counter,
  recipesContent
});
