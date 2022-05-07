import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Instructions } from './pages/Instructions';
import { Results } from './pages/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/instructions' element={<Instructions/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
