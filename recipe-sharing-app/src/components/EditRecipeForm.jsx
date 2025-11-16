import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
