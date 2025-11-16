import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],

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
