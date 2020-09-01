import React from 'react';
import './App.css';
import RandomMeal from './components/RandomMeal.js';

function App() {
  return (
    <section>
    <div className="App">
    <div className="container">
    <h2>Featured Meals</h2>
      <RandomMeal />
      </div>
    </div>
    </section>
  );
}

export default App;
