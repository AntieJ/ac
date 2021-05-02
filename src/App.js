import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import Forecast from './pages/forecast/Forecast';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Homepage path='/'/>
        <Forecast path='/city/:id' />
        <Route path='*' element={<p>Sory, nothing found here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
