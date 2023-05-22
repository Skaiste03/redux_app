import {
  SINGLE_RECIPE_FAIL,
  SINGLE_RECIPE_REQUEST,
  SINGLE_RECIPE_SUCCESS,
} from '../constants/recipeConstants';
import { createClient } from 'contentful';

export const fetchSingleRecipe = (recipe_id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SINGLE_RECIPE_REQUEST });

      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
      });

      const response = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': recipe_id,
      });

      // Extract the recipe item from the response
      const recipe = response.items[0];

      dispatch({ type: SINGLE_RECIPE_SUCCESS, payload: recipe });
    } catch (error) {
      dispatch({ type: SINGLE_RECIPE_FAIL, payload: error.message });
    }
  };
};
