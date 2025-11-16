import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import FavoritesList from "../components/FavoritesList";
import RecommendationsList from "../components/RecommendationsList";

const Dashboard = () => {
  return (
    <div>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default Dashboard;
