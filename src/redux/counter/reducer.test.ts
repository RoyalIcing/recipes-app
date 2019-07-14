import { counter } from "./reducer";

describe("counter reducer", () => {
  it("initializes with 0", () => {
    expect(counter(undefined, { type: undefined })).toEqual(0);
  });

  it("ignores other actions", () => {
    expect(counter(10, { type: undefined })).toEqual(10);
  });

  describe("counter.increment action", () => {
    it("adds one by default", () => {
      expect(counter(10, { type: "counter.increment" })).toEqual(11);
    });

    it("adds 7 when payload.by is 7", () => {
      expect(counter(10, { type: "counter.increment", payload: { by: 7 } })).toEqual(17);
    });
  })
});
