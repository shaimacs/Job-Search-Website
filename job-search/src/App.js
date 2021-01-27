import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar'
import Card from './Components/Card'
import JobDetails from './Components/JobDetails'
import CardsList from './Components/CardsList'
import './App.css';

function App() {
  return (
    <div className="App" id="main">
      <NavBar />
      <CardsList />
    </div>
  );
}

export default App;
