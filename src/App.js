import './App.css';
import { Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <div className="App">
      <RecipeDetails />
      {/* <Recipes /> */}
    </div>
  );
}

export default App;
