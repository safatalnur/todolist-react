import React, { useState } from 'react';

import './style.css';

function App() {
  const [tempTask, setTempTask] = useState('');
  const [tasks, setTasks] = useState([]);

  //upon hitting the button,
  //save text from temptask to the list of tasks
  const saveTasks = function() {
    const newTasks = tasks.map(item => item);
    newTasks.push(tempTask);
    console.log("New item in List : " + tempTask);
    console.log("List Length = " + newTasks.length);
    setTasks(newTasks);
    setTempTask('');
  }

  //everytime user type something in inputfield
  //update the record in temptask
  const handleInputChange = function (event) {
    console.log('input > '+ event.target.value);
    setTempTask(event.target.value);
  }

  console.log("APP RERENDERED");
  return (
    <div className="App">
      <div className="appInput">
        <input className="inputText" type="text"  value={tempTask} name="todolist" onChange={handleInputChange} />
        <button onClick={saveTasks}>Enter</button>
      </div>
        <br />
        <ul className="newItems">
        {
          tasks.map(function(tasks, i) {
            return <li key={i}>{tasks}</li>;
          })
        }
        </ul>
    </div>
  );
}

export default App;
