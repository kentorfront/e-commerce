import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import Casual from './Components/Casual/Casual';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';

function App() {
  // alert(window.screen.width)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Casual />} exact path='/shop/casual' />
          <Route element={<NotFound />} exact path='*' />
          <Route element={'place'} exact path='/productDetail/:id' />
          <Route element={<Profile />} exact path='/profile' />
          <Route element={<Register />} exact path='/register' />
          <Route element={<Login />} exact path='/login' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
