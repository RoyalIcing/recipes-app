import { fetchRecipes, RecipesData } from "../../api/recipes";
import { Dispatch } from "redux";

export type RecipesContentAction =
  | { type: "recipesContent.fetch.requested" }
  | { type: "recipesContent.fetch.failed"; error: Error }
  | { type: "recipesContent.fetch.succeeded"; data: RecipesData };

export function requestRecipesContent() {
  return async (dispatch: Dispatch<RecipesContentAction>) => {
    dispatch({ type: "recipesContent.fetch.requested" });

    try {
      const data = await fetchRecipes();
      dispatch({ type: "recipesContent.fetch.succeeded", data });
    } catch (error) {
      dispatch({ type: "recipesContent.fetch.failed", error });
    }
  };
}
