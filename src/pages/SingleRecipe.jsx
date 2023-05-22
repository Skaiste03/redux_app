import React, { useEffect } from 'react';
import '../styles/recipe.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleRecipe } from '../shared/redux/actions/recipeActions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loader from '../components/Loader';

const SingleRecipe = () => {
  const { recipe, loading, error } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const { slug } = useParams();

  // Fetch data finding with slug value
  useEffect(() => {
    dispatch(fetchSingleRecipe(slug));
  }, [dispatch, slug]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!recipe) {
    return null;
  }

  const { title, cookingTime, ingredients, featuredImage, method } =
    recipe.fields;

  return (
    <div>
      <div className='banner'>
        <div className='image-box'>
          <img src={`https:${featuredImage.fields.file.url}`} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>

      <div className='cooking-info'>
        <p>Take about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>

        {ingredients.map((ing) => (
          <span key={ing}>{ing}</span>
        ))}
      </div>

      <div className='method-box'>
        <h3>Method:</h3>
        <div className='method'>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
};

export default SingleRecipe;
