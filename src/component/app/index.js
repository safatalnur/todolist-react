import React, { useState } from 'react';
import TasksList from '../todolist/index.js';
import InputField from '../inputfield/index.js';
import './style.css';

function App() {

  console.log('APP RENRENDERED');

  const [tasks, setTasks] = useState([]);

  const saveTasks = function(newTask) {
    const newTasks = tasks.map(item => item);
    newTasks.push(newTask);
    setTasks(newTasks);
    console.log(tasks)
  }


  return (
    <div className="App">
      <div className="appInput">
        <InputField onSave = {saveTasks} />
      </div>
        <br />
        <TasksList tasks={tasks}/>
    </div>
  );
}

export default App;
