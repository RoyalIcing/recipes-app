import React from "react";
import { Dispatch, StoreState } from "../../redux/types";
import { connect } from "react-redux";

function Counter({
  count,
  dispatch
}: {
  count: number;
  dispatch: Dispatch;
}): JSX.Element {
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: "counter.increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter.increment", payload: { by: 10 } });
        }}
      >
        +10
      </button>
    </div>
  );
}

export const ConnectedCounter = connect(
  ({ counter }: StoreState) => ({
    count: counter
  }),
  dispatch => ({ dispatch })
)(Counter);
