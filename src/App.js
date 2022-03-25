import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navibar from './components/Navibar';

function App() {



  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
