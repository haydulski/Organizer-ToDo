import React from 'react';
import './Task.css';

const Task = (props) => {
    console.log(props.task);
    return <div className="singletask">
        {props.text}, {props.date}
    </div>
}
export default Task