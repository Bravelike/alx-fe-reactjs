import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",

  // ---- SEARCH ----
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const { recipes } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      recipe.description.toLowerCase().includes(term.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.filteredRecipes, recipe],
    }));
  },

  // ---- FAVORITES ----
  favorites: [],

  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  toggleFavorite: (recipeId) => {
    const { favorites, addFavorite, removeFavorite } = get();
    favorites.includes(recipeId)
      ? removeFavorite(recipeId)
      : addFavorite(recipeId);
  },

  // ---- RECOMMENDATIONS ----
  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Example: recommend recipes with matching category or ingredient
    const favoriteRecipes = recipes.filter((r) =>
      favorites.includes(r.id)
    );

    const recommended = recipes.filter((recipe) => {
      return favoriteRecipes.some((fav) =>
        fav.category === recipe.category
      );
    });

    set({ recommendations: recommended });
  },
}));
