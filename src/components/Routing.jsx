import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/Authpage/AuthPage';
import Home from '../pages/Home/Home';
import Newcourt from '../pages/Newcourt/Newcourt';
import CourtList from '../pages/CourtList/CourtList';
import CourtsDetails from '../pages/CourtsDetails/CourtsDetails';

function Routing() {

  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />

      <Route path='/home' element={<Home />} />

      <Route path='/courts'>
        <Route path='courtlist' element={<CourtList />} />
        <Route path='courtsdetails/:id' element={<CourtsDetails/>} />
      </Route>
      <Route path='/Newcourt' element={<Newcourt />} />

    </Routes>
  );
}

export default Routing;
