import React, { Component } from 'react'
import Ninjas from './Ninjas'

function App() {
  return (
    <div className="App">
              <h1>My First React App</h1>
              <p>Welcome</p>
              <Ninjas name="abc" age="25" belt="black"/>
              <Ninjas name="def" age="30" belt="green"/>
    </div>
  );
}

export default App;
