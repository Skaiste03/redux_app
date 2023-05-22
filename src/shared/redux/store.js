import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './reducers/api/recipesReducer';
import recipeReducer from './reducers/api/recipeReducer';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipe: recipeReducer,
  },
});
