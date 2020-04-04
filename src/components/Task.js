import React from 'react';
import './Task.css';

const Task = (props) => {
    // console.log(props.task);
    return (<div className="singletask">
        {props.text}, {props.date} <span>
            {props.task.active && <button onClick={() => props.passive(props.task.id)}>Task completed</button>}
            <button onClick={() => props.remove(props.task.id)}>X</button></span>
    </div>
    )
}
export default Task