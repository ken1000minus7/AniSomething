import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { TopAll } from './pages/TopAll'
import { TopAnime } from './pages/TopAnime';
import { TopMovie } from './pages/TopMovie';
import { Route, Routes } from 'react-router-dom'

function App() {

  
  return (
    <div className="App">
      <span className="title">AniSomething</span>
      <NavBar />
      <Routes>
        <Route exact path="/TopAll" element={<TopAll />} />
        <Route exact path="/TopAnime" element={<TopAnime/>} />
        <Route exact path="/TopMovie" element={<TopMovie />} />
        <Route exact path="/" element={<TopAll />} />
      </Routes>
    </div>
  );
}

export default App;
