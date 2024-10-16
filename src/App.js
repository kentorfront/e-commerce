import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import Casual from './Components/Casual/Casual';
import Register from './Components/Register/Register';

function App() {
  // alert(window.screen.width)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Casual />} exact path='/shop/casual' />
          <Route element={<Register />} exact path='/register' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
