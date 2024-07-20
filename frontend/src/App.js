import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Manager from './pages/Manager'
import Tenant from './pages/Tenant'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/manager' element={<Manager />} />
      <Route path='/tenant' element={<Tenant />} />
    </Routes>
  );
}

export default App;
