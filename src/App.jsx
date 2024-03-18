import Layout from './layout/layout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumPage from './pages/albumpage';
import SongPage from './pages/songpage';
import LoginPage from './component/login';
import Hero from './pages/hero';
import MyRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App
