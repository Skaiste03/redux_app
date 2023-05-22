import {
  RECIPES_REQUEST,
  RECIPES_SUCCESS,
  RECIPES_FAILS,
  SET_CURRENT_PAGE,
} from '../../constants/recipesConstants';

const initialState = {
  recipes: [],
  currentPage: 1,
  itemsPerPage: 6,
  loading: false,
  error: null,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_REQUEST:
      return { ...state, loading: true, error: null };
    case RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        recipes: action.payload,
      };
    case RECIPES_FAILS:
      return { ...state, loading: false, error: action.payload };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
