import raw from "raw.macro";

type ImageVariant =
  | "landscape32small1x"
  | "landscape32small2x"
  | "landscape32small3x"
  | "landscape32medium1x"
  | "landscape32medium2x"
  | "landscape32medium3x"
  | "landscapemobile1x"
  | "landscapemobile2x"
  | "landscapemobile3x"
  | "landscapewidedesktop1x"
  | "landscapewidedesktop2x"
  | "landscapewidedesktop3x"
  | "tags";

interface Tag {
  id: number;
  catId: number;
  name: string;
}

interface Author {}

interface RecipeItem {
  contentId: number;
  title: string;
  urlPartial: string;
  isFavourited: boolean;
  imageList: Record<
    ImageVariant,
    {
      url: string;
    }
  >;
  tags: Array<Tag>;
  authors: Array<Author>;
}

interface RecipesData {
  contents: Array<RecipeItem>;
}

const recipesJSON = raw("./recipes.json");

export function fetchRecipes(): Promise<RecipesData> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(recipesJSON));
    }, 500);
  });
}
