import React from 'react';
import recipeSearch from './source/components/recipeSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <recipeSearch />
    </div>
  )
}
