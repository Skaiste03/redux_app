import {
  RECIPES_REQUEST,
  RECIPES_SUCCESS,
  RECIPES_FAILS,
  SET_CURRENT_PAGE,
} from '../constants/recipesConstants';
import { createClient } from 'contentful';

// Action creator for fetching recipes from Contentful
export const fetchRecipes = (currentPage) => {
  return async (dispatch) => {
    try {
      // Dispatch the request action to indicate that the request is in progress
      dispatch({ type: RECIPES_REQUEST });

      // Create a client instance with Contentful credentials
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
      });

      // Fetch recipes from Contentful
      const response = await client.getEntries({ content_type: 'recipe' });

      // Extract the recipe items from the response
      const recipes = response.items;

      // Dispatch the success action with the fetched recipes
      dispatch({ type: RECIPES_SUCCESS, payload: recipes });
      dispatch({ type: SET_CURRENT_PAGE, payload: currentPage });
    } catch (error) {
      // Dispatch the failure action if an error occurs
      console.log(error);
      dispatch({ type: RECIPES_FAILS, payload: error.message });
    }
  };
};
