import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
