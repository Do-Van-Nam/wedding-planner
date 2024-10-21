import './App.css';
import { useState, useEffect, useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginRegister from './pages/LoginRegister'
import Home from './pages/Home/Home'
import Tenant from './pages/Tenant'
import Rooms from './pages/Rooms/Rooms'
import Problems from './pages/Problems/Problems'
import Statistics from './pages/Statistics/Statistics'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Checklist from './pages/Checklist';
import api from './api';
import PrivateRoute from './PrivateRoute';

import AppProvider from './AppContext';
import { AppContext } from './AppContext';

function App() {
  const location = useLocation()
  
  return (
    <AppProvider>
      {location.pathname !== '/' && <Header />}
      {/* <Header/> */}
      <Routes >
        <Route path='/' element={<LoginRegister />} />
          <Route path='/home' element={<Home />} />
          <Route path='/manager/rooms' element={<Rooms />} />
          <Route path='/manager/problems' element={<Problems />} />
          <Route path='/manager/statistics' element={<Statistics />} />
          <Route path='/tenant' element={<Tenant />} />
          <Route path='/checklist' element={<Checklist/>} />
          <Route path='/budget'  />
          <Route path='/vendor/venue'  />
          <Route path='/vendor/photographer'  />
          <Route path='/vendor/'  />
          <Route path='/vendor/venue'  />
          <Route path='/vendor/venue'  />
          <Route path='/vendor/venue'  />

      </Routes>
    </AppProvider>
  );
}

export default App;
