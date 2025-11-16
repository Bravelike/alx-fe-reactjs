import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Update search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();   // Auto-run filter
  },

  // Add recipes and re-filter
  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes();   // Auto-run filter
  },

  // Filter recipes based on searchTerm
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lower = searchTerm.toLowerCase();

    const results = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lower) ||
      (recipe.ingredients && recipe.ingredients.join(" ").toLowerCase().includes(lower))
    );

    set({ filteredRecipes: results });
  },
}));
