import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './auth/Login';

function App() {
  return (
    <div className="">
     <BrowserRouter>
 
     <Routes>
       <Route path='/login' element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
