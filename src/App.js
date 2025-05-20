import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import OurCoffeePage from './components/OurCoffeePage/OurCoffeePage'
import ForYourPleasurePage from './components/ForYourPleasurePage/forYourPleasurePage'
import CoffeeItemPage from './components/CoffeItemPage/CoffeeItemPage'

import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="Coffee/" element={<HomePage />} />
        <Route path="Coffee/our-coffee" element={<OurCoffeePage />} />
        <Route path="Coffee/for-your-pleasure" element={<ForYourPleasurePage />} />
         <Route path="Coffee/coffee-item/:id" element={<CoffeeItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
