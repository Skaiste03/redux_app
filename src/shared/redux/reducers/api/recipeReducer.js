import {
  SINGLE_RECIPE_FAIL,
  SINGLE_RECIPE_SUCCESS,
  SINGLE_RECIPE_REQUEST,
} from '../../constants/recipeConstants';

const initialState = {
  recipe: null,
  loading: false,
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case SINGLE_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
