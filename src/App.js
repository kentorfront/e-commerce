import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Casual from './Components/Casual/Casual';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
import ProductPageContainer from './Components/ProductPage/ProductPageContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop/casual' element={<Casual />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/shop/:type/productDetail/:id' element={<ProductPageContainer />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
