import './App.css';
import React, { useState, useEffect } from 'react';
import grabData from './apiCalls';


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
  fetch('http://localhost:3001/api/v1/tricks')
  .then(response => 
      response.json()
  )
  .then(data => {
    console.log(data)
    setData(data)
  })
  .catch(error => {
    console.log(error)
  });
}, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <ul>
      {data.map(trick => (
        <li key={trick.id}>{trick.name}</li>
      ))}
    </ul>
    </div>
  );
}

export default App; 
