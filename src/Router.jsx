import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import SearchPill from './pages/pill/SearchPill';
import ShowPill from './pages/pill/ShowPill';
import Location from './pages/hospiatal/Location';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/searchPill' element={<SearchPill />} />
        <Route path='/showPill' element={<ShowPill />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
