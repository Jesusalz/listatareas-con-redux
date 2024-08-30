// src/App.jsx

import React from 'react';
import TaskList from './components/TaskList'; 
import TaskLoader from './components/TaskLoader'; 

const App = () => {
  return (
    <div className="App">
      <TaskLoader /> 
      <h1 className="text-3xl font-bold mb-4 text-white">Lista</h1>
      <TaskList />
    </div>
  );
};

export default App;
