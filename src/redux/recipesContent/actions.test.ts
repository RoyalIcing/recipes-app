import { requestRecipesContent, RecipesContentAction } from "./actions";

import { configureTestStore } from "../testStore";
import { fetchRecipes } from "../../api/recipes";

jest.mock("../../api/recipes", () => ({
  fetchRecipes: jest.fn()
}));

describe("requestRecipesContent()", () => {
  async function subject(): Promise<Array<RecipesContentAction>> {
    const mockStore = configureTestStore<RecipesContentAction>();
    await mockStore.dispatch(requestRecipesContent());
    return mockStore.getActions();
  }

  describe("when fetchRecipes resolves", () => {
    beforeEach(() => {
      (fetchRecipes as jest.Mock).mockResolvedValue("fetched recipes");
    });

    it("first dispatches .requested", async () => {
      const [firstAction] = await subject();
      expect(firstAction.type).toEqual("recipesContent.fetch.requested");
    });

    it("then dispatches .succeeded with data from fetchRecipes()", async () => {
      const [, secondAction] = await subject();
      expect(secondAction).toMatchObject({
        type: "recipesContent.fetch.succeeded",
        data: "fetched recipes"
      });
    });
  });

  describe("when fetchRecipes rejects", () => {
    beforeEach(() => {
      (fetchRecipes as jest.Mock).mockRejectedValue(
        new Error("failed to load")
      );
    });

    it("first dispatches .requested", async () => {
      const [firstAction] = await subject();
      expect(firstAction.type).toEqual("recipesContent.fetch.requested");
    });

    it("then dispatches .failed with error from fetchRecipes()", async () => {
      const [, secondAction] = await subject();
      expect(secondAction).toMatchObject({
        type: "recipesContent.fetch.failed",
        error: new Error("failed to load")
      });
    });
  });
});
