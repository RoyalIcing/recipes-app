import configureStore from "redux-mock-store";
import { middlewares } from "./middleware";

export function configureTestStore<State = {}>(state?: State) {
  return configureStore<State, any>(middlewares)(state);
}
