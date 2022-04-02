import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { TopAll } from './pages/TopAll'
import { TopAnime } from './pages/TopAnime';
import { TopMovie } from './pages/TopMovie';
import { TopAiring } from './pages/TopAiring';
import { AnimePage } from './pages/AnimePage';
import { Route, Routes } from 'react-router-dom'
import { SearchAnime } from './pages/SearchAnime';

function App() {
  return (
    <div className="App">
      <div className="title">AniSomething</div>
      <NavBar />
      <Routes>
        <Route exact path="/TopAll" element={<TopAll />} />
        <Route exact path="/TopAnime" element={<TopAnime/>} />
        <Route exact path="/TopMovie" element={<TopMovie />} />
        <Route exact path="/TopAiring" element={<TopAiring />} />
        <Route exact path="/AniSomething" element={<TopAll />} />
        <Route exact path="/anime/:id" element={<AnimePage />} />
        <Route exact path="/search/anime" element={<SearchAnime/>}/>
      </Routes>
    </div>
  );
}

export default App;
