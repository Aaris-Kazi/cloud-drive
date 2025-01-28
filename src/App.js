import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />}/>
      <Route path='/login' element={<Loginpage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/home' element={<HomePage />}/>
    </Routes>
  );
}

export default App;
