import React from 'react';
import './recipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className='card'>
      <div className='featured'>
        <img
          className='card-image'
          src={`https:${thumbnail.fields.file.url}`}
          alt={`${slug}`}
        />
      </div>
      <div className='content'>
        <div className='info'>
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className='actions'>
          <Link to={`/${slug}`}>Cook this</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
