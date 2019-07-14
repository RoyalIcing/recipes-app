import { ConnectedRecipes } from "./Recipes";

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureTestStore } from "../../redux/testStore";
import { StoreState } from "../../redux/types";

describe("ConnectedRecipes component", () => {
  let store: ReturnType<typeof configureTestStore>;
  let queries: ReturnType<typeof render>;
  function subject(initialState: Pick<StoreState, "recipesContent">) {
    store = configureTestStore(initialState);
    queries = render(
      <Provider store={store}>
        <ConnectedRecipes />
      </Provider>
    );
  }
  afterEach(cleanup);

  describe("when recipes content is not fetching", () => {
    beforeEach(() => {
      subject({
        recipesContent: {
          fetching: false,
          error: null,
          data: null
        }
      });
    });

    it("shows no recipes found message", () => {
      expect(queries.getByText("No recipes found.")).toBeInstanceOf(HTMLElement)
    });
  });

  describe("when recipes content has an error", () => {
    beforeEach(() => {
      subject({
        recipesContent: {
          fetching: false,
          error: new Error("some error message"),
          data: null
        }
      });
    });

    it("shows the error message", () => {
      expect(queries.getByText("Error loading: some error message")).toBeInstanceOf(HTMLElement)
    });
  });

  describe("when recipes content has 0 recipes", () => {
    beforeEach(() => {
      subject({
        recipesContent: {
          fetching: false,
          error: null,
          data: {
            contents: []
          }
        }
      });
    });

    it("shows no recipes found message", () => {
      expect(queries.getByText("No recipes found.")).toBeInstanceOf(HTMLElement)
    });
  });

  describe("when recipes content has some recipes", () => {
    beforeEach(() => {
      subject({
        recipesContent: {
          fetching: false,
          error: null,
          data: {
            contents: [
              {
                contentId: 5333,
                title: "ANZAC Smoothie",
                urlPartial: "anzac-smoothie",
                isFavourited: false,
                imageList: {
                  landscape32medium1x: {
                    url:
                      "https://cdn.centr.com/content/6000/5333/images/landscape32medium1x-loup-cen-anzacsmoothie-32l-v2.jpg"
                  }
                } as any,
                tags: [],
                authors: []
              },
              {
                contentId: 7153,
                title: "Lamb Rissoles with Salad",
                urlPartial: "lamb-rissoles-with-salad",
                isFavourited: false,
                imageList: {
                  landscape32medium1x: {
                    url:
                      "https://cdn.centr.com/content/8000/7153/images/landscape32medium1x-loup-hco-lambrissoleswithsalad-32l.jpg"
                  }
                } as any,
                tags: [],
                authors: []
              }
            ]
          }
        }
      });
    });

    it("shows two figures", () => {
      expect(queries.queryAllByRole("figure")).toHaveLength(2);
    });

    it("shows 'ANZAC Smoothie' text", () => {
      expect(queries.getByText("ANZAC Smoothie")).toBeInstanceOf(HTMLElement);
    });

    it("shows 'Lamb Rissoles with Salad' text", () => {
      expect(queries.getByText("Lamb Rissoles with Salad")).toBeInstanceOf(HTMLElement);
    });
  });
});
