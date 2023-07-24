import './App.css';
import React, { useState, useEffect } from 'react';
import MakeTricks from './CreateTrick';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => {
        console.log(data,'data')
        setData(data)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  const updateTrick = (newTrick) => {
    setData(data => [...data, newTrick]);
  };

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <ul>
        {data.map(trick => (
          <div key={trick.id}>
            <li>Trick: {trick.name}</li>
            <li>Stance: {trick.stance}</li>
            <li>Obstacle: {trick.obstacle}</li>
            <li>Tutorial: {trick.tutorial}</li>
          </div>
        ))}
      </ul>
      <MakeTricks trick={{}} onUpdate={(updatedTrick) => updateTrick(updatedTrick.id, updatedTrick)} />
    </div>
  );
}

export default App;
