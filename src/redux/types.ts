import { CounterAction } from "./counter/actions";
import { RecipesContentAction } from "./recipesContent/actions";
import { rootReducer } from "./rootReducer";

export type AppAction = CounterAction | RecipesContentAction;

export interface AppDispatch {
  (action: AppAction): AppAction;
  (action: (dispatch: AppDispatch) => void): AppAction;
}

export type StoreState = ReturnType<typeof rootReducer>;
