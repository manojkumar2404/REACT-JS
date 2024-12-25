import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from './Crud';
import Singlepage from './Singlepage';

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Crud></Crud>}></Route>
          <Route path='/product/:id' element={<Singlepage></Singlepage>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
