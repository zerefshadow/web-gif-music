import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import GifBeautiful from './pages/GifBeautiful/GifBeautiful';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route 
          path = '/GIF'
          element = {
            <>
              <Header /> <GifBeautiful />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
