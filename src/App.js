import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navibar from './components/Navibar';
import Available from './components/Available';
import Leave from './components/Leave';
import Tdy from './components/Tdy';
import Projections from './components/Projections';


function App() {



  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Available" element={<Available />} />
        <Route path="Leave" element={<Leave />} />
        <Route path="Tdy" element={<Tdy />} />
        <Route path="Projections" element={<Projections />} />
      </Routes>
    </>
  );
}

export default App;
