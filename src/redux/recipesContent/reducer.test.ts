import { recipesContent } from "./reducer";
import { RecipesData } from "../../api/recipes";

describe("recipesContent reducer", () => {
  it("initializes with fetching as false and null properties", () => {
    expect(recipesContent(undefined, { type: undefined })).toEqual({
      fetching: false,
      error: null,
      data: null
    });
  });

  it("ignores other actions", () => {
    expect(
      recipesContent(
        {
          fetching: false,
          error: null,
          data: null
        },
        { type: undefined }
      )
    ).toEqual({
      fetching: false,
      error: null,
      data: null
    });
  });

  describe("recipesContent.fetch.requested", () => {
    it("sets fetching to true", () => {
      expect(
        recipesContent(
          {
            fetching: false,
            error: null,
            data: null
          },
          { type: "recipesContent.fetch.requested" }
        ).fetching
      ).toEqual(true);
    });
  });

  describe("recipesContent.fetch.failed", () => {
    const result = recipesContent(
      {
        fetching: true,
        error: null,
        data: null
      },
      { type: "recipesContent.fetch.failed", error: new Error("some error") }
    );

    it("sets fetching to false", () => {
      expect(result.fetching).toEqual(false);
    });

    it("takes error from action", () => {
      expect(result.error).toEqual(new Error("some error"));
    });
  });

  describe("recipesContent.fetch.succeeded", () => {
    const result = recipesContent(
      {
        fetching: true,
        error: null,
        data: null
      },
      {
        type: "recipesContent.fetch.succeeded",
        data: { contents: [{ contentId: 123 }] } as RecipesData
      }
    );

    it("sets fetching to false", () => {
      expect(result.fetching).toEqual(false);
    });

    it("takes data from action", () => {
      expect(result.data).toEqual({
        contents: [{ contentId: 123 }]
      });
    });

    it("sets error to null", () => {
      expect(result.error).toBeNull();
    });
  });
});
