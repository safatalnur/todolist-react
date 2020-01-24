import React from 'react';

function TasksList(props) {
    return (

        <div className="listItem">
            <ul className="newItems">
                {
                props.tasks.map(function(tasks, i) {
                return <li key={i}>{tasks}</li>;
                })}
            </ul>
        </div>
    )
}

export default TasksList;
