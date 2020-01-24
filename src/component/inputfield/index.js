import React, { useState } from 'react';

import App from '../app/index.js';
import TasksList from '../todolist/index.js';


function InputField(props) {
    console.log ('input field rerendered');
    const [tempTask, setTempTask] = useState('');

    const handleInputChange = function (event) {
        //console.log (event.target.value);
        setTempTask(event.target.value);
         
      }

      const saveTasks = function () {
          props.onSave(tempTask);
          setTempTask('');
      }
    
    return (


        <div>
        <input className="inputText" type="text"  value={tempTask} name="todolist" onChange={handleInputChange} />
        <button onClick={saveTasks}>Enter</button>
        </div>
    )
}
export default InputField;