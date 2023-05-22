import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../shared/redux/actions/recipesActions';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import Loader from '../components/Loader';
import '../styles/recipes.css';

const Recipes = () => {
  // State
  const { recipes, currentPage, itemsPerPage, loading, error } = useSelector(
    (state) => state.recipes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes(currentPage));
  }, [dispatch, currentPage]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRecipes = recipes.slice(startIndex, endIndex);

  // Previous and Next buttons logic
  const handleNextPage = () => {
    dispatch(fetchRecipes(currentPage + 1));
    window.scrollTo(0, 0);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchRecipes(currentPage - 1));
      window.scrollTo(0, 0);
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <p>{error}</p>
  ) : (
    <>
      <div className='recipe-list'>
        {displayedRecipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
      <div className='pagination'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`button ${currentPage === 1 ? 'button-disabled' : ''}`}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= recipes.length}
          className={`button ${
            endIndex >= recipes.length ? 'button-disabled' : ''
          }`}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Recipes;
