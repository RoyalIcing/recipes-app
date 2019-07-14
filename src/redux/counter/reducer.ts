import { CounterAction } from "./actions";

export function counter(
  state: number = 0,
  action: CounterAction | { type: undefined }
): number {
  switch (action.type) {
    case "counter.increment":
      return state + (action.payload !== undefined ? action.payload.by : 1);
    default:
      return state;
  }
}
