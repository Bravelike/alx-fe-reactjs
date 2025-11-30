import React from "react";
import { Link } from "react-router-dom";   // <-- REQUIRED IMPORT
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="recipe-list-container">
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            
            {/* Link to recipe detail page */}
            <Link to={`/recipe/${recipe.id}`}>
              <h3 className="recipe-title">{recipe.title}</h3>
            </Link>

            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
