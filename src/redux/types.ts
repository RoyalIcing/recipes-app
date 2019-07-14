import { CounterAction } from "./counter/actions";
import { rootReducer } from "./rootReducer";

export type Action = CounterAction;

export type Dispatch = (action: Action) => void;

export type StoreState = ReturnType<typeof rootReducer>;
