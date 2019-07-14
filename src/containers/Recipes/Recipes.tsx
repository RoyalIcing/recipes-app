import React, { useEffect } from "react";
import { connect } from "react-redux";

import { StoreState } from "../../redux/types";
import { RecipesContentState } from "../../redux/recipesContent/reducer";
import { requestRecipesContent } from "../../redux/recipesContent/actions";

interface RecipesProps {
  loading: boolean;
  recipesData: RecipesContentState["data"];
  error: Error | null;
  onLoad: () => void;
}
function Recipes({
  loading,
  recipesData,
  error,
  onLoad
}: RecipesProps): JSX.Element {
  useEffect(() => {
    onLoad();
  }, []);

  if (loading) {
    return <div>Loading…</div>;
  }

  if (error) {
    return <div>Error loading: {error.message}</div>;
  }

  if (recipesData === null) {
    return (
      <div>
        <p>No recipes found.</p>
      </div>
    );
  }

  return (
    <div>
      <p>Found {recipesData.contents.length} recipes</p>
    </div>
  );
}

interface ConnectedRecipesProps {}

export const ConnectedRecipes = connect<
  Omit<RecipesProps, "onLoad">,
  Pick<RecipesProps, "onLoad">,
  ConnectedRecipesProps,
  Pick<StoreState, "recipesContent">
>(
  ({ recipesContent }) => ({
    loading: recipesContent.fetching,
    recipesData: recipesContent.data,
    error: recipesContent.error
  }),
  {
    onLoad: requestRecipesContent
  }
)(Recipes);
