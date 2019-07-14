import { RecipesContentAction } from "./actions";
import { RecipesData } from "../../api/recipes";

export interface RecipesContentState {
  fetching: boolean;
  error: Error | null;
  data: RecipesData | null;
}

const initialState: RecipesContentState = {
  fetching: false,
  error: null,
  data: null
}

export function recipesContent(
  state = initialState,
  action: RecipesContentAction | { type: undefined }
): RecipesContentState {
  switch (action.type) {
    case "recipesContent.fetch.requested":
      return { ...state, fetching: true };
    case "recipesContent.fetch.failed":
      return { ...state, fetching: false, error: action.error };
    case "recipesContent.fetch.succeeded":
      return { ...state, fetching: false, data: action.data };
    default:
      return state;
  }
}
