import './App.css';
import { useState, useEffect, useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Manager from './pages/Manager/Manager'
import Tenant from './pages/Tenant'
import Rooms from './pages/Rooms/Rooms'
import Problems from './pages/Problems/Problems'
import Statistics from './pages/Statistics/Statistics'
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import api from './api';
import PrivateRoute from './PrivateRoute';

import AppProvider from './AppContext';
import { AppContext } from './AppContext';

function App() {
  const location = useLocation()
  
  return (
    <AppProvider>
      {location.pathname !== '/' && <Header />}
      {location.pathname !== '/' && <Sidebar />}
      <Routes >
        <Route path='/' element={<Home />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/manager/rooms' element={<Rooms />} />
          <Route path='/manager/problems' element={<Problems />} />
          <Route path='/manager/statistics' element={<Statistics />} />
          <Route path='/tenant' element={<Tenant />} />

      </Routes>
    </AppProvider>
  );
}

export default App;
